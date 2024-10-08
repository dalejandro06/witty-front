"use server";
import {
  Category,
  Departaments,
  ForgotPassword,
  HomeSupplierMetrics,
  Register,
  RegisterParams,
  RegisterSupplierParams,
  RegisterSupplierResponse,
  SubCategoriesParams,
  SubCategory,
} from "../types/ApiTypes";

import ApiClient from "./clients/ApiClient";

export async function registerUser(payload: RegisterParams): Promise<Register> {
  const data = await ApiClient.post<Register>("/v1/accounts/register-user/", {
    email: payload.email,
    username: payload.username,
    first_name: payload.first_name,
    last_name: payload.last_name,
    password: payload.password,
  });

  return data.data;
}
export async function getCategories(): Promise<Category[]> {
  const data = await ApiClient.get<Category[]>(
    "/v1/services/categories-line-item/",
  );

  return data.data;
}
export async function getSubCategories({
  category_line_item,
}: SubCategoriesParams): Promise<SubCategory[]> {
  const data = await ApiClient.get<SubCategory[]>(
    `/v1/services/categories/${category_line_item}/`,
  );

  return data.data;
}

export async function forgotPassword({
  email,
}: {
  email: string;
}): Promise<ForgotPassword> {
  const data = await ApiClient.post<ForgotPassword>(
    "/v1/accounts/forgot-password/",
    {
      email,
    },
  );

  return data.data;
}

export async function getDepartaments(): Promise<Departaments[]> {
  const data = await ApiClient.get<Departaments[]>(
    "/v1/geolocations/states-input/",
  );

  return data.data;
}
export async function getCityByDepartment(id: string): Promise<Departaments[]> {
  const data = await ApiClient.get<Departaments[]>(
    `/v1/geolocations/cities-input/${id}/`,
  );

  return data.data;
}

export async function registerSupplier(
  payload: RegisterSupplierParams,
): Promise<RegisterSupplierResponse> {
  const data = await ApiClient.post<RegisterSupplierResponse>(
    "/v1/accounts/join-supplier-profile/",
    {
      ...payload,
    },
  );

  return data.data;
}
export async function getHomeSupplier(): Promise<HomeSupplierMetrics> {
  const data = await ApiClient.get<HomeSupplierMetrics>(
    "/v1/metrics/get-home-supplier/",
  );

  return data.data;
}
