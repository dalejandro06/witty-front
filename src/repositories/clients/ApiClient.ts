import axios, { InternalAxiosRequestConfig } from "axios";

import { EXTERNAL_API_BASE } from "@/config/config";

const ApiClient = axios.create({
  baseURL: EXTERNAL_API_BASE,
});

const injectToken = async (config: InternalAxiosRequestConfig) => {
  // TODO: inyectar token del usuario
  return config;
};

ApiClient.interceptors.request.use(injectToken);

export default ApiClient;
