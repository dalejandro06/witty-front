import axios, { InternalAxiosRequestConfig } from "axios";

import { EXTERNAL_API_BASE, INTERNAL_API_BASE } from "@/config/config";

const ApiClient = axios.create({
  baseURL: EXTERNAL_API_BASE,
});

const injectToken = async (config: InternalAxiosRequestConfig) => {
  const session = await fetch(`${INTERNAL_API_BASE}/api/get-token`, {
    method: "GET",
  });

  const token = await session.json();

  if (token.token) {
    config.headers.Authorization = `Bearer ${token.token}`;
  }

  return config;
};

ApiClient.interceptors.request.use(injectToken);

export default ApiClient;
