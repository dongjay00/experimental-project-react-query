import { getPostsPaginated } from "@apis/posts";
import { GetPostsPaginatedReturnType } from "@apis/posts/index.type";
import { useQuery } from "@tanstack/react-query";

type UsePostPaginatedQueryProps = {
  page: number;
};

const usePostPaginatedQuery = ({ page }: UsePostPaginatedQueryProps) => {
  const postPaginatedQuery = useQuery<GetPostsPaginatedReturnType>({
    queryKey: ["posts", { page }],
    keepPreviousData: true,
    queryFn: () => getPostsPaginated({ page }),
  });

  return postPaginatedQuery;
};

export default usePostPaginatedQuery;
