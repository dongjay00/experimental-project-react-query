import { getPostsPaginated } from "@apis/posts";
import { GetPostsPaginatedReturnType } from "@apis/posts/index.type";
import { useInfiniteQuery } from "@tanstack/react-query";

const usePostInfiniteQuery = () => {
  const postInfiniteQuery = useInfiniteQuery<GetPostsPaginatedReturnType>({
    queryKey: ["posts", "infinite"],
    getNextPageParam: (prevData) => prevData.nextPage,
    queryFn: ({ pageParam = 1 }) => getPostsPaginated({ page: pageParam }),
  });

  return postInfiniteQuery;
};

export default usePostInfiniteQuery;
