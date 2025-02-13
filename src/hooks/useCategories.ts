import { useCallback, useEffect, useState } from "react";

import { getCategories, getSubCategories } from "@/repositories/ApiRepository";
import { Category, SubCategory } from "@/types/ApiTypes";

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
  const [loadingSubCategory, setLoadingSubCategory] = useState(false);

  useEffect(() => {
    setLoadingCategories(true);
    getAndSaveCategories()
      .then(setCategories)
      .finally(() => setLoadingCategories(false));
  }, []);

  const getSubCategoriesByCategoryId = useCallback((id: number) => {
    setLoadingSubCategory(true);
    getSubCategories({ category_line_item: id })
      .then(setSubCategories)
      .finally(() => setLoadingSubCategory(false));
  }, []);

  return {
    categories,
    loadingCategories,
    getSubCategoriesByCategoryId,
    subCategories,
    loadingSubCategory,
  };
};

async function getAndSaveCategories() {
  const itemsLocalStorage = localStorage.getItem("categories");

  if (itemsLocalStorage) {
    return JSON.parse(itemsLocalStorage);
  }
  const data = await getCategories();

  localStorage.setItem("categories", JSON.stringify(data));

  return data;
}
