import { Button, Link } from "@nextui-org/react";
import Image from "next/image";

import NoLocation from "@/assets/no-locations.png";
import { getSupplierLocations } from "@/repositories/ApiRepository";
import LocationsList from "@/app/modules/supplier-location/LocationsList";
import TitleInfo from "@/components/TitleInfo";

async function SavedLocations() {
  const locations = await getSupplierLocations();

  return (
    <div className="my-5 relative h-full">
      <TitleInfo
        infoText="Busca y filtra tus ubicaciones en donde ofreces tus servicios."
        title="Tus ubicaciones"
      />
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
            href="/location/add-location"
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
