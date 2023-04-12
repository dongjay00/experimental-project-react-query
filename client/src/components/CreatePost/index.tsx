import { useRef } from "react";
import Post from "../Post";
import { useCreatePostMutation } from "@queries/posts";

type CreatePostProps = {
  changeCurrentPage: (page: JSX.Element) => void;
};

const CreatePost = ({ changeCurrentPage }: CreatePostProps) => {
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLInputElement>(null);
  const createPostMutation = useCreatePostMutation({
    successAction: (data) => changeCurrentPage(<Post id={data.id} />),
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createPostMutation.mutate({
      title: titleRef.current?.value || "",
      body: bodyRef.current?.value || "",
    });
  };

  return (
    <div>
      {createPostMutation.isError && JSON.stringify(createPostMutation.error)}
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input id="title" ref={titleRef} />
        </div>
        <div>
          <label htmlFor="body">Body</label>
          <input id="body" ref={bodyRef} />
        </div>
        <button disabled={createPostMutation.isLoading}>
          {createPostMutation.isLoading ? "Loading..." : "Create"}
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
