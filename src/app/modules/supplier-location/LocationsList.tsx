"use client";

import LocationCard from "@/components/LocationCard";
import { SupplierLocation } from "@/types/ApiTypes";
import NoLocation from "@/assets/no-locations.png";
import EmptyStateLayout from "@/components/EmptyStateLayout";

type Props = {
  locations: SupplierLocation[];
};
function LocationsList({ locations }: Props) {
  if (!locations.length) {
    return (
      <EmptyStateLayout
        actionButton={{
          href: "/location/add-location",
          text: "Crea una ubicación",
        }}
        image={NoLocation}
        subtitle="¡Agrega una para empezar!"
        title="Aún no has generado ubicaciones."
      />
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
