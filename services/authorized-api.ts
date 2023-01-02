import axios, { AxiosInstance } from "axios";

const AuthorizedInstance = (baseURL: string): AxiosInstance => {
  const instance = axios.create({
    baseURL,
  }) as AxiosInstance;

  return instance;
};

export default AuthorizedInstance;
