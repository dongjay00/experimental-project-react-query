import { useState } from "react";
import { usePostPaginatedQuery } from "@queries/posts";

const PostListPaginated = () => {
  const [page, setPage] = useState(1);

  const { status, error, data, isPreviousData } = usePostPaginatedQuery({
    page,
  });

  if (status === "loading") return <h1>Loading...</h1>;
  if (status === "error") return <h1>{JSON.stringify(error)}</h1>;

  const previousPage = data.previousPage;
  const nextPage = data.nextPage;

  return (
    <>
      <h1>
        Post List Paginated
        <br />
        <small>{isPreviousData && "Previous Data"}</small>
      </h1>
      {data.posts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
      {previousPage !== undefined && (
        <button onClick={() => setPage(previousPage)}>Previous</button>
      )}{" "}
      {nextPage !== undefined && (
        <button onClick={() => setPage(nextPage)}>Next</button>
      )}
    </>
  );
};

export default PostListPaginated;
