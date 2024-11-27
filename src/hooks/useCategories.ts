import { useCallback, useEffect, useState } from "react";

import { getCategories, getSubCategories } from "@/repositories/ApiRepository";
import { Category, SubCategory } from "@/types/ApiTypes";

export const useCategories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [subCategories, setSubCategories] = useState<SubCategory[]>([]);
  const [loadingSubCategory, setLoadingSubCategory] = useState(false);

  useEffect(() => {
    const sessionCategories = sessionStorage.getItem("serviceCategories");

    if (sessionCategories) {
      setCategories(JSON.parse(sessionCategories));
    } else {
      setLoadingCategories(true);
      getCategories()
        .then((data) => {
          setCategories(data);
          sessionStorage.setItem("serviceCategories", JSON.stringify(data));
        })
        .finally(() => setLoadingCategories(false));
    }
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
