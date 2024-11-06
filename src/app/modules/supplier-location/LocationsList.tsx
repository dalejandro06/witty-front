"use client";

import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import Image from "next/image";

import LocationCard from "@/components/LocationCard";
import { SupplierLocation } from "@/types/ApiTypes";
import NoLocation from "@/assets/no-locations.png";

type Props = {
  locations: SupplierLocation[];
};
function LocationsList({ locations }: Props) {
  if (!locations.length) {
    return (
      <div className="grid place-items-center gap-6 mt-20">
        <Image
          alt="Not locations banner"
          height={150}
          src={NoLocation}
          width={150}
        />
        <div className="text-center">
          <p>Aún no has generado ubicaciones.</p>
          <p>¡Agrega una para empezar!</p>
        </div>
        <Button
          showAnchorIcon
          as={Link}
          className="bg-gray-100 text-black"
          href="/location/add-location"
          size="lg"
        >
          Crea una ubicación
        </Button>
      </div>
    );
  }

  return (
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
  );
}

export default LocationsList;
