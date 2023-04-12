import { useQuery } from "@tanstack/react-query";
import { usePostsQuery } from "@queries/posts";

const PostsList1 = () => {
  const postsQuery = usePostsQuery({
    placeholderData: [
      { id: 1, title: "Initial Data", userId: 1, body: "Initial Body" },
    ],
  });

  if (postsQuery.status === "loading") return <h1>Loading...</h1>;
  if (postsQuery.status === "error") {
    return <h1>{JSON.stringify(postsQuery.error)}</h1>;
  }

  return (
    <div>
      <h1>Posts List 1</h1>
      <ol>
        {postsQuery.data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
    </div>
  );
};

export default PostsList1;
