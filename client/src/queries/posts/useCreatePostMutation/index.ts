import { createPost } from "@apis/posts";
import { PostsItemModel } from "@models/posts";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type UseCreatePostMutationProps = {
  successAction: (data: PostsItemModel) => void;
};

const useCreatePostMutation = ({
  successAction,
}: UseCreatePostMutationProps) => {
  const queryClient = useQueryClient();
  const createPostMutation = useMutation({
    mutationFn: createPost,
    onSuccess: (data) => {
      queryClient.setQueryData(["posts", data.id], data);
      queryClient.invalidateQueries(["posts"], { exact: true });
      successAction(data);
    },
  });

  return createPostMutation;
};

export default useCreatePostMutation;
