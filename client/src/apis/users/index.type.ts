import { UsersModel } from "@models";

export type GetUserParameterType = {
  id: number;
};

export type GetUserReturnType = UsersModel.UsersItemModel;
