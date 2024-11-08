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
    getDepartaments()
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
