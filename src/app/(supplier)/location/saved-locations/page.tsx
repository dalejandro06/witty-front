import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import { getSupplierLocations } from "@/repositories/ApiRepository";
import LocationsList from "@/app/modules/supplier-location/LocationsList";
import TitleInfo from "@/components/TitleInfo";

async function SavedLocations() {
  const locations = await getSupplierLocations();

  return (
    <section className="flex flex-col justify-between min-h-full">
      <div className="grid gap-4 mb-4">
        <TitleInfo
          infoText="Busca y filtra tus ubicaciones en donde ofreces tus servicios."
          title="Tus ubicaciones"
        />
        <LocationsList locations={locations} />
      </div>
      <Button
        fullWidth
        as={Link}
        className="text-black py-5"
        color="secondary"
        href="/location/add-location"
        size="lg"
      >
        Añade una ubicación
      </Button>
    </section>
  );
}

export default SavedLocations;
