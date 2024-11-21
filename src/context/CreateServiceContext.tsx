"use client";

import { createContext, PropsWithChildren, useMemo, useState } from "react";

export type CreateServiceContextType = {
  basicData: BasicDataFields;
  setBasicData: (v: BasicDataFields) => void;
  rates: RateFields[];
  setRates: (v: RateFields[]) => void;
  locations: Location[];
  setLocations: (v: Location[]) => void;
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
  cost: string;
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
    locationMode: false,
  });
  const [rates, setRates] = useState<RateFields[]>([]);
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
