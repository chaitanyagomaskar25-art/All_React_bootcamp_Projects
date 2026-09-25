import { useInfiniteQuery } from "@tanstack/react-query";

const LIMIT = 5;

const fetchUsers = async ({ pageParam = 0 }) => {
  const response = await fetch(
    `https://dummyjson.com/users?limit=${LIMIT}&skip=${pageParam}&select=firstName,age`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
};

export default function User() {
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,

    initialPageParam: 0,

    getNextPageParam: (lastPage, allPages) => {
      const nextSkip = allPages.length * LIMIT;

      return nextSkip < lastPage.total ? nextSkip : undefined;
    },
  });

  if (isLoading) return <h2>Loading...</h2>;

  if (error) return <h2>{error.message}</h2>;

  return (
    <div style={{ width: "400px", margin: "20px auto" }}>
      <h2>Users List</h2>

      {data.pages.map((page) =>
        page.users.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid gray",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            <h3>{user.firstName}</h3>
            <p>Age: {user.age}</p>
          </div>
        ))
      )}

      <button
        onClick={() => fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage
          ? "Loading..."
          : hasNextPage
          ? "Load More"
          : "No More Users"}
      </button>
    </div>
  );
}