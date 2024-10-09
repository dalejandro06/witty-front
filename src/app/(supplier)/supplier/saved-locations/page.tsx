import { Input } from "@nextui-org/input";
import { Button, Divider } from "@nextui-org/react";
import FeatherIcon from "feather-icons-react";

import LocationCard from "@/components/LocationCard";

function SavedLocations() {
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
        <div className="mt-10 grid gap-5">
          <LocationCard
            location={{ city: "Bogotá", department: "Cundinamarca" }}
          />
          <LocationCard
            location={{ city: "Bogotá", department: "Cundinamarca" }}
          />
          <LocationCard
            location={{ city: "Bogotá", department: "Cundinamarca" }}
          />
          <LocationCard
            location={{ city: "Bogotá", department: "Cundinamarca" }}
          />
        </div>
        <Button fullWidth className="text-black py-5 mt-10" color="secondary">
          Añade una ubicación
        </Button>
      </div>
    </>
  );
}

export default SavedLocations;
