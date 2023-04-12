import axios, { AxiosInstance } from "axios";

const SERVER_ADDRESS = "http://localhost:3000";

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${SERVER_ADDRESS}`,
});
