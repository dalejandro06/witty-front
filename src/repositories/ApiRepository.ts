import { Category, SubCategory } from "../types/ApiTypes";

import ApiClient from "./clients/ApiClient";

type SubCategoriesParams = {
  category_line_item: number;
};

export default {
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
};
