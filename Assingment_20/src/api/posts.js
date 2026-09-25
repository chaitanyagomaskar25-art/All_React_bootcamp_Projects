const PAGE_SIZE = 5;

export const fetchPosts = async ({ pageParam = 1 }) => {
  const res = await fetch(
    `http://localhost:3000/posts?_page=${pageParam}&_per_page=${PAGE_SIZE}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const result = await res.json();

  return {
    posts: result.data,
    nextOffset: result.next ? pageParam + 1 : undefined,
  };
};

export const likePost = async ({ id, likes }) => {
  const res = await fetch(`http://localhost:3000/posts/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ likes }),
  });

  if (!res.ok) {
    throw new Error("Failed to update likes");
  }

  return res.json();
};