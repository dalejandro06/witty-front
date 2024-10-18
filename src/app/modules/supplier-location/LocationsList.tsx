"use client";

import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

import LocationCard from "@/components/LocationCard";
import { SupplierLocation } from "@/types/ApiTypes";

type Props = {
  locations: SupplierLocation[];
};
function LocationsList({ locations }: Props) {
  const router = useRouter();

  return (
    <>
      <div className="mt-10 grid gap-5">
        {locations.map((location) => (
          <LocationCard
            key={location.id}
            isDisabled={!location.status}
            isPrincipal={location.available_all_services}
            location={location}
          />
        ))}
      </div>
      <Button
        fullWidth
        className="text-black py-5 mt-10"
        color="secondary"
        size="lg"
        onPress={() => router.push("/location/add-location")}
      >
        Añade una ubicación
      </Button>
    </>
  );
}

export default LocationsList;
