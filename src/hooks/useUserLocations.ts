import { useEffect, useMemo, useState } from "react";

import { getSupplierLocations } from "@/repositories/ApiRepository";
import { SupplierLocation } from "@/types/ApiTypes";

export const useUserLocations = () => {
  const [userLocations, setUserLocations] = useState<SupplierLocation[]>([]);
  const [loadingLocations, setLoadingLocations] = useState(false);

  useEffect(() => {
    setLoadingLocations(true);
    getAndSaveUserLocations()
      .then(setUserLocations)
      .finally(() => setLoadingLocations(false));
  }, []);

  const availableUserLocations = useMemo(() => {
    return userLocations.filter((item) => item.status);
  }, [userLocations]);

  return {
    userLocations,
    loadingLocations,
    availableUserLocations,
  };
};

async function getAndSaveUserLocations(): Promise<SupplierLocation[]> {
  const itemsLocalStorage = localStorage.getItem("userLocations");

  if (itemsLocalStorage) {
    return JSON.parse(itemsLocalStorage);
  }
  const data = await getSupplierLocations();

  localStorage.setItem("userLocations", JSON.stringify(data));

  return data;
}
