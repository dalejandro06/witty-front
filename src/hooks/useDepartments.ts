import { useCallback, useEffect, useState } from "react";

import ApiRepository from "@/repositories/ApiRepository";
import { Departaments } from "@/types/ApiTypes";

export const useDepartments = () => {
  const [departments, setDepartments] = useState<Departaments[]>([]);
  const [loadingDepartments, setLoadingDepartments] = useState(false);
  const [cities, setCities] = useState<Departaments[]>([]);
  const [loadingCity, setLoadingCity] = useState(false);

  const getCityByDepartment = useCallback((id: string) => {
    setLoadingCity(true);
    ApiRepository.getCityByDepartment(id)
      .then(setCities)
      .finally(() => setLoadingCity(false));
  }, []);

  useEffect(() => {
    setLoadingDepartments(true);
    ApiRepository.getDepartaments()
      .then(setDepartments)
      .finally(() => setLoadingDepartments(false));
  }, []);

  return {
    departments,
    loadingDepartments,
    getCityByDepartment,
    cities,
    loadingCity,
  };
};
