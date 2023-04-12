import { PostsModel } from "@models";

export type GetPostsReturnType = PostsModel.PostsItemModel[];

export type GetPostsPaginatedParameterType = {
  page: number;
};

export type GetPostsPaginatedReturnType = {
  nextPage?: number;
  previousPage?: number;
  posts: PostsModel.PostsItemModel[];
};

export type GetPostParameterType = {
  id: number;
};

export type GetPostReturnType = PostsModel.PostsItemModel;

export type CreatePostParameterType = {
  title: string;
  body: string;
};

export type CreatePostReturnType = PostsModel.PostsItemModel;
