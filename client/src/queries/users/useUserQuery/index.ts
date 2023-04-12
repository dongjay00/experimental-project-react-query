import { getUser } from "@apis/users";
import { useQuery } from "@tanstack/react-query";

type UseUserQueryProps = {
  userId?: number;
};

const useUserQuery = ({ userId }: UseUserQueryProps) => {
  const userQuery = useQuery({
    queryKey: ["users", userId],
    enabled: userId != null,
    queryFn: () => getUser({ id: userId || 0 }),
  });

  return userQuery;
};

export default useUserQuery;
