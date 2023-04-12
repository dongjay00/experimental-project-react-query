import {
  CreatePostParameterType,
  CreatePostReturnType,
  GetPostParameterType,
  GetPostReturnType,
  GetPostsPaginatedParameterType,
  GetPostsPaginatedReturnType,
  GetPostsReturnType,
} from "./index.type";
import { axiosInstance } from "..";

export const getPosts = (): Promise<GetPostsReturnType> => {
  return axiosInstance
    .get("/posts", { params: { _sort: "title" } })
    .then((res) => res.data);
};

export const getPostsPaginated = ({
  page,
}: GetPostsPaginatedParameterType): Promise<GetPostsPaginatedReturnType> => {
  return axiosInstance
    .get("/posts", {
      params: { _page: page, _sort: "title", _limit: 2 },
    })
    .then((res) => {
      const hasNext = page * 2 <= parseInt(res.headers["x-total-count"]);
      return {
        nextPage: hasNext ? page + 1 : undefined,
        previousPage: page > 1 ? page - 1 : undefined,
        posts: res.data,
      };
    });
};

export const getPost = ({
  id,
}: GetPostParameterType): Promise<GetPostReturnType> => {
  return axiosInstance.get(`/posts/${id}`).then((res) => res.data);
};

export const createPost = ({
  title,
  body,
}: CreatePostParameterType): Promise<CreatePostReturnType> => {
  return axiosInstance
    .post("/posts", {
      title,
      body,
      userId: 1,
      id: Date.now(),
    })
    .then((res) => res.data);
};
