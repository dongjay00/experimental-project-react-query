import { GetUserParameterType, GetUserReturnType } from "./index.type";
import { axiosInstance } from "..";

export const getUser = ({
  id,
}: GetUserParameterType): Promise<GetUserReturnType> => {
  return axiosInstance.get(`/users/${id}`).then((res) => res.data);
};
