import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import TitleInfo from "@/components/TitleInfo";
import NoLocation from "@/assets/no-services-yet.png";
import EmptyStateLayout from "@/components/EmptyStateLayout";

function ListServices() {
  return (
    <section className="flex flex-col justify-between min-h-full">
      <div>
        <TitleInfo
          infoText="Aquí encontraras tu lista de servicios creados."
          title="Tu lista de servicios"
        />
        <EmptyStateLayout
          image={NoLocation}
          subtitle="¡Agrega una para empezar!"
          title="Aún no has generado ubicaciones."
        />
      </div>
      <Button
        fullWidth
        as={Link}
        className="text-black py-5"
        color="secondary"
        href="/services/create"
        size="lg"
      >
        Añadir un nuevo servicio
      </Button>
    </section>
  );
}

export default ListServices;
