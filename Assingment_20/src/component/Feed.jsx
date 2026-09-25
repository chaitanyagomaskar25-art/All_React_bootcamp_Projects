import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import { fetchPosts, likePost } from "../api/posts";
import { useRef, useCallback } from "react";
import PostCard from "./PostCard.jsx";

export default function Feed() {
  const queryClient = useQueryClient();

  const {
  data,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  isLoading,
  error,
} = useInfiniteQuery({
  queryKey: ["posts"],
  queryFn: fetchPosts,
  initialPageParam: 1,
  getNextPageParam: (lastPage) => lastPage.nextOffset,
});

  const mutation = useMutation({
    mutationFn: likePost,

    onMutate: async ({ id }) => {
      await queryClient.cancelQueries({
        queryKey: ["posts"],
      });

      const previous =
        queryClient.getQueryData(["posts"]);

      queryClient.setQueryData(["posts"], (old) => ({
        ...old,

        pages: old.pages.map((page) => ({
          ...page,

          posts: page.posts.map((post) =>
            post.id === id
              ? { ...post, likes: post.likes + 1 }
              : post
          ),
        })),
      }));

      return { previous };
    },

    onError: (err, variables, context) => {
      queryClient.setQueryData(
        ["posts"],
        context.previous
      );
    },

    onSettled: () => {
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
  });

  const observer = useRef();

  const lastPostRef = useCallback(
    (node) => {
      if (isFetchingNextPage) return;

      if (observer.current)
        observer.current.disconnect();

      observer.current = new IntersectionObserver(
        (entries) => {
          if (
            entries[0].isIntersecting &&
            hasNextPage
          ) {
            fetchNextPage();
          }
        }
      );

      if (node) observer.current.observe(node);
    },
    [
      fetchNextPage,
      hasNextPage,
      isFetchingNextPage,
    ]
  );

  if (isLoading) return <h2>Loading...</h2>;

  if (error) return <h2>{error.message}</h2>;

  return (
  <div className="container">
    {data.pages.map((page, pageIndex) =>
      page.posts.map((post, index) => {
        const last =
          pageIndex === data.pages.length - 1 &&
          index === page.posts.length - 1;

        return (
          <PostCard
            key={post.id}
            ref={last ? lastPostRef : null}
            post={post}
            onLike={() =>
              mutation.mutate({
                id: post.id,
                likes: post.likes + 1,
              })
            }
          />
        );
      })
    )}

    {isFetchingNextPage && <h3>Loading...</h3>}
  </div>
);
}