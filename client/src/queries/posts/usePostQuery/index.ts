import { getPost } from "@apis/posts";
import { useQuery } from "@tanstack/react-query";

type UsePostQueryProps = {
  postId: number;
};

const usePostQuery = ({ postId }: UsePostQueryProps) => {
  const postQuery = useQuery({
    queryKey: ["posts", postId],
    queryFn: () => getPost({ id: postId }),
  });

  return postQuery;
};

export default usePostQuery;
