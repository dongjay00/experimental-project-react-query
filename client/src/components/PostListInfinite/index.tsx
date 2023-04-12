import { usePostInfiniteQuery } from "@queries/posts";

const PostListInfinite = () => {
  const {
    status,
    error,
    data,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = usePostInfiniteQuery();

  if (status === "loading") return <h1>Loading...</h1>;
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;

  return (
    <>
      <h1>Post List Infinite</h1>
      {data.pages
        .flatMap((data) => data.posts)
        .map((post) => (
          <div key={post.id}>{post.title}</div>
        ))}
      {hasNextPage && (
        <button onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </button>
      )}
    </>
  );
};

export default PostListInfinite;
