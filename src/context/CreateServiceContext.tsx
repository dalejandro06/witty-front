"use client";

import { createContext, PropsWithChildren, useMemo, useState } from "react";

export type CreateServiceContextType = {
  basicData: BasicDataFields;
  setBasicData: (v: BasicDataFields) => void;
  rates: string;
  setRates: (v: string) => void;
  locations: Location[];
  setLocations: (v: Location[]) => void;
};

type BasicDataFields = {
  category: string | undefined;
  subCategory: string | undefined;
  serviceName: string;
  serviceDescription: string;
};

export const CreateServiceContext = createContext<CreateServiceContextType>({
  basicData: {
    category: undefined,
    subCategory: undefined,
    serviceName: "",
    serviceDescription: "",
  },
  setBasicData: () => {},
  rates: "",
  setRates: () => {},
  locations: [],
  setLocations: () => {},
});

export default function CreateServiceContextProvider({
  children,
}: PropsWithChildren) {
  const [basicData, setBasicData] = useState<BasicDataFields>({
    category: undefined,
    subCategory: undefined,
    serviceName: "",
    serviceDescription: "",
  });
  const [rates, setRates] = useState("");
  const [locations, setLocations] = useState<Location[]>([]);

  const value = useMemo(
    () => ({
      basicData,
      setBasicData,
      rates,
      setRates,
      locations,
      setLocations,
    }),
    [basicData, rates, locations],
  );

  return (
    <CreateServiceContext.Provider value={value}>
      {children}
    </CreateServiceContext.Provider>
  );
}
