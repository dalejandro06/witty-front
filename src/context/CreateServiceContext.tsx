"use client";

import { createContext, PropsWithChildren, useMemo, useState } from "react";

import { SupplierLocation } from "@/types/ApiTypes";

export type CreateServiceContextType = {
  basicData: BasicDataFields;
  setBasicData: (v: BasicDataFields) => void;
  rates: RateFields[];
  setRates: (v: RateFields[]) => void;
  selectedLocations: SupplierLocation[];
  setSelectedLocations: (v: SupplierLocation[]) => void;
};

type BasicDataFields = {
  category: string | undefined;
  subCategory: string | undefined;
  serviceName: string;
  serviceDescription: string;
  locationMode: boolean;
};

export type RateFields = {
  name: string;
  emoji: string;
  estimatedTime: number;
  timeSpan: boolean;
  cost: number | bigint;
};

export const CreateServiceContext = createContext<CreateServiceContextType>({
  basicData: {
    category: undefined,
    subCategory: undefined,
    serviceName: "",
    serviceDescription: "",
    locationMode: false,
  },
  setBasicData: () => {},
  rates: [],
  setRates: () => {},
  selectedLocations: [],
  setSelectedLocations: () => {},
});

export default function CreateServiceContextProvider({
  children,
}: PropsWithChildren) {
  const [basicData, setBasicData] = useState<BasicDataFields>({
    category: undefined,
    subCategory: undefined,
    serviceName: "",
    serviceDescription: "",
    locationMode: false,
  });
  const [rates, setRates] = useState<RateFields[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<
    SupplierLocation[]
  >([]);

  const value = useMemo(
    () => ({
      basicData,
      setBasicData,
      rates,
      setRates,
      selectedLocations,
      setSelectedLocations,
    }),
    [basicData, rates, selectedLocations],
  );

  return (
    <CreateServiceContext.Provider value={value}>
      {children}
    </CreateServiceContext.Provider>
  );
}
