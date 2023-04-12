import { useUserQuery } from "@queries/users";
import { usePostQuery } from "@queries/posts";

type PostProps = {
  id: number;
};

const Post = ({ id }: PostProps) => {
  const postQuery = usePostQuery({ postId: id });
  const userQuery = useUserQuery({ userId: postQuery?.data?.userId });

  if (postQuery.status === "loading") return <h1>Loading...</h1>;
  if (postQuery.status === "error") {
    return <h1>{JSON.stringify(postQuery.error)}</h1>;
  }

  return (
    <>
      <h1>
        {postQuery.data.title} <br />
        <small>
          {userQuery.isLoading
            ? "Loading User..."
            : userQuery.isError
            ? "Error Loading User"
            : userQuery.data.name}
        </small>
      </h1>
      <p>{postQuery.data.body}</p>
    </>
  );
};

export default Post;
