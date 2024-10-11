import { Button, Divider, Link } from "@nextui-org/react";
import Image from "next/image";

import NoLocation from "@/assets/no-locations.png";
import { getSupplierLocations } from "@/repositories/ApiRepository";
import LocationsList from "@/app/modules/supplier-location/LocationsList";

async function SavedLocations() {
  const locations = await getSupplierLocations();

  return (
    <div className="my-5 px-6 relative h-full">
      <h1 className="text-3xl font-bold my-5">Tus ubicaciones</h1>
      <div className="flex items-center">
        <Divider className="w-[3px] h-[60px] me-3" orientation="vertical" />
        <p className="text-gray-500">
          Busca y filtra tus ubicaciones en donde ofreces tus servicios.
        </p>
      </div>
      {locations.length > 0 ? (
        <LocationsList locations={locations} />
      ) : (
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
            size="lg"
          >
            Crea una ubicación
          </Button>
        </div>
      )}
    </div>
  );
}

export default SavedLocations;
