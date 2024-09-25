import {
  Category,
  Departaments,
  ForgotPassword,
  Register,
  SubCategory,
} from "../types/ApiTypes";

import ApiClient from "./clients/ApiClient";

type SubCategoriesParams = {
  category_line_item: number;
};

type RegisterParams = {
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  password: string;
};

export default {
  async registerUser(payload: RegisterParams): Promise<Register> {
    const data = await ApiClient.post<Register>("/v1/accounts/register-user/", {
      email: payload.email,
      username: payload.username,
      first_name: payload.first_name,
      last_name: payload.last_name,
      password: payload.password,
    });

    return data.data;
  },
  async getCategories(): Promise<Category[]> {
    const data = await ApiClient.get<Category[]>(
      "/v1/services/categories-line-item/",
    );

    return data.data;
  },
  async getSubCategories({
    category_line_item,
  }: SubCategoriesParams): Promise<SubCategory[]> {
    const data = await ApiClient.get<SubCategory[]>(
      `/v1/services/categories/${category_line_item}/`,
    );

    return data.data;
  },

  async forgotPassword({ email }: { email: string }): Promise<ForgotPassword> {
    const data = await ApiClient.post<ForgotPassword>(
      "/v1/accounts/forgot-password/",
      {
        email,
      },
    );

    return data.data;
  },

  async getDepartaments(): Promise<Departaments[]> {
    const data = await ApiClient.get<Departaments[]>(
      "/v1/geolocations/states-input/",
    );

    return data.data;
  },
  async getCityByDepartment(id: string): Promise<Departaments[]> {
    const data = await ApiClient.get<Departaments[]>(
      `/v1/geolocations/cities-input/${id}/`,
    );

    return data.data;
  },
};
