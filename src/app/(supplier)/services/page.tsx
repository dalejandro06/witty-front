import { Button, Link } from "@heroui/react";

import TitleInfo from "@/components/TitleInfo";
import NoLocation from "@/assets/no-services-yet.png";
import EmptyStateLayout from "@/components/EmptyStateLayout";
import ServiceCard from "@/components/ServiceCard";
import { getSupplierServices } from "@/repositories/ApiRepository";

async function ListServices() {
  const supplierServices = await getSupplierServices();

  return (
    <section className="flex flex-col gap-4 justify-between min-h-full relative">
      <div className="grid gap-5 relative">
        <TitleInfo
          infoText="Aquí encontraras tu lista de servicios creados."
          title="Tu lista de servicios"
        />
        {supplierServices.length > 0 ? (
          supplierServices.map((service) => (
            <ServiceCard key={service.name} serviceInfo={service} />
          ))
        ) : (
          <EmptyStateLayout
            image={NoLocation}
            subtitle="¡Agrega una para empezar!"
            title="Aún no has generado ubicaciones."
          />
        )}
        <Button
          fullWidth
          as={Link}
          className="text-black py-5 sticky bottom-0 z-20"
          color="secondary"
          href="/services/create"
          size="lg"
          variant="shadow"
        >
          Añadir un nuevo servicio
        </Button>
      </div>
    </section>
  );
}

export default ListServices;
