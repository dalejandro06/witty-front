import Image from "next/image";
import { Button, Link } from "@heroui/react";

import ScheduledService from "@/components/ScheduledService";
import SectionTitle from "@/components/SectionTitle";
import { ServiceInfo } from "@/types";
import EmptyImage from "@/assets/empty-services-client.png";

function ScheduledServices() {
  const services: ServiceInfo[] = [
    {
      id: 1,
      icon: "home",
      title: "Limpieza Casa",
      supplierName: "Camilo Prada",
      location: "Av calle 85 #10 - 60",
      date: "22/AGO",
    },
  ];

  return (
    <div className="grid gap-5">
      <SectionTitle title="Resumen servicios agendados" />
      {services.length < 1 ? (
        services.map((item) => (
          <ScheduledService key={item.id} service={item} />
        ))
      ) : (
        <div className="grid justify-center gap-3 justify-items-center mt-6">
          <Image alt="Sin servicios agendados" src={EmptyImage} width={100} />
          <p className="text-lg">No tienes servicios agendados</p>
          <Button
            showAnchorIcon
            as={Link}
            className="text-black"
            color="secondary"
            href="/search-services"
          >
            Busca un servicio
          </Button>
        </div>
      )}
    </div>
  );
}

export default ScheduledServices;
