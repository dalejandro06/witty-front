"use server";
import axios, { InternalAxiosRequestConfig } from "axios";

import { EXTERNAL_API_BASE } from "@/config/config";
import { auth } from "@/auth";

const ApiClient = axios.create({
  baseURL: EXTERNAL_API_BASE,
});

const injectToken = async (config: InternalAxiosRequestConfig) => {
  const session = await auth();

  if (session && session.user) {
    config.headers["Authorization"] = `Bearer ${session.user.token}`;
  }

  return config;
};

ApiClient.interceptors.request.use(injectToken);

export default ApiClient;
