import { Input } from "@nextui-org/input";
import { Button, Divider, Link } from "@nextui-org/react";
import FeatherIcon from "feather-icons-react";
import Image from "next/image";

import LocationCard from "@/components/LocationCard";
import NoLocation from "@/assets/no-locations.png";
import { getSupplierLocations } from "@/repositories/ApiRepository";

async function SavedLocations() {
  const locations = await getSupplierLocations();

  return (
    <>
      <Input
        classNames={{
          input: "text-small",
          inputWrapper:
            "font-normal text-default-500 bg-gray-200 rounded-none px-6",
        }}
        endContent={<FeatherIcon icon="x-circle" size={18} />}
        placeholder="Busca una ubicación..."
        size="lg"
        startContent={<FeatherIcon icon="search" size={18} />}
        type="search"
      />
      <div className="my-5 px-6 relative h-full">
        <h1 className="text-3xl font-bold my-5">Tus ubicaciones</h1>
        <div className="flex items-center">
          <Divider className="w-[3px] h-[60px] me-3" orientation="vertical" />
          <p className="text-gray-500">
            Busca y filtra tus ubicaciones en donde ofreces tus servicios.
          </p>
        </div>
        {locations.length > 0 ? (
          <>
            <div className="mt-10 grid gap-5">
              {locations.map((location) => (
                <LocationCard
                  key={location.id}
                  isDisabled={location.status}
                  isPrincipal={location.available_all_services}
                  location={location}
                />
              ))}
            </div>
            <Button
              fullWidth
              className="text-black py-5 mt-10"
              color="secondary"
            >
              Añade una ubicación
            </Button>
          </>
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
            <Button showAnchorIcon as={Link} className="bg-gray-100 text-black">
              Crea una ubicación
            </Button>
          </div>
        )}
      </div>
    </>
  );
}

export default SavedLocations;
