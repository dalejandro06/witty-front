import { useCallback, useEffect, useState } from "react";

import {
  getCityByDepartment as getCity,
  getDepartaments,
} from "@/repositories/ApiRepository";
import { Departaments } from "@/types/ApiTypes";

export const useDepartments = () => {
  const [departments, setDepartments] = useState<Departaments[]>([]);
  const [loadingDepartments, setLoadingDepartments] = useState(false);
  const [cities, setCities] = useState<Departaments[]>([]);
  const [loadingCity, setLoadingCity] = useState(false);

  useEffect(() => {
    setLoadingDepartments(true);
    getDepartamentsAndSave()
      .then(setDepartments)
      .finally(() => setLoadingDepartments(false));
  }, []);

  const getCityByDepartment = useCallback((id: string) => {
    setLoadingCity(true);
    getCity(id)
      .then(setCities)
      .finally(() => setLoadingCity(false));
  }, []);

  return {
    departments,
    loadingDepartments,
    getCityByDepartment,
    cities,
    loadingCity,
  };
};

async function getDepartamentsAndSave() {
  const itemsLocalStorage = localStorage.getItem("departments");

  if (itemsLocalStorage) {
    return JSON.parse(itemsLocalStorage);
  }
  const data = await getDepartaments();

  localStorage.setItem("departments", JSON.stringify(data));

  return data;
}
