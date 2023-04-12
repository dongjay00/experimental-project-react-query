import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { getPost } from "@apis/posts";
import {
  CreatePost,
  Post,
  PostListInfinite,
  PostListPaginated,
  PostsList1,
  PostsList2,
} from "@components";

const App = () => {
  const [currentPage, setCurrentPage] = useState(<PostsList1 />);
  const queryClient = useQueryClient();

  const onHoverPostOneLink = () => {
    queryClient.prefetchQuery({
      queryKey: ["posts", 1],
      queryFn: () => getPost({ id: 1 }),
    });
  };

  const changeCurrentPage = (page: JSX.Element) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <button onClick={() => changeCurrentPage(<PostsList1 />)}>
        Posts List 1
      </button>
      <button onClick={() => changeCurrentPage(<PostsList2 />)}>
        Posts List 2
      </button>
      <button
        onMouseEnter={onHoverPostOneLink}
        onClick={() => changeCurrentPage(<Post id={1} />)}
      >
        First Post
      </button>
      <button
        onClick={() =>
          changeCurrentPage(
            <CreatePost changeCurrentPage={changeCurrentPage} />
          )
        }
      >
        New Post
      </button>
      <button onClick={() => changeCurrentPage(<PostListPaginated />)}>
        Post List Paginated
      </button>
      <button onClick={() => changeCurrentPage(<PostListInfinite />)}>
        Post List Infinite
      </button>
      <br />
      {currentPage}
    </div>
  );
};

export default App;
