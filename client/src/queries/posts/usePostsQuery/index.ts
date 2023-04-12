import { getPosts } from "@apis/posts";
import { GetPostsReturnType } from "@apis/posts/index.type";
import { useQuery } from "@tanstack/react-query";

type UsePostsQueryProps = {
  placeholderData?: GetPostsReturnType;
};

const usePostsQuery = ({ placeholderData }: UsePostsQueryProps) => {
  const postsQuery = useQuery<GetPostsReturnType>({
    queryKey: ["posts"],
    queryFn: getPosts,
    placeholderData: placeholderData || undefined,
  });

  return postsQuery;
};

export default usePostsQuery;
