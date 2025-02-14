import { Button, Link } from "@heroui/react";

import TitleInfo from "@/components/TitleInfo";
import NoLocation from "@/assets/no-services-yet.png";
import EmptyStateLayout from "@/components/EmptyStateLayout";
import ServiceCard from "@/components/ServiceCard";

const services = [
  {
    id: "1",
    title: "Peluquería",
    description:
      " Nuestro servicio de peluquería ofrece cortes modernos y personalizados, realizados por estilistas expertos en un ambiente relajante. ¡Renueva tu look y luce siempre impecable!",
    category: {
      color: "",
      icon: "",
      id: 1,
      title: "Peluquería",
    },
    rates: [
      {
        name: "General",
        estimatedTime: "0",
        cost: 10000,
      },
    ],
    location: { id: 1, name: "Bogotá" },
    isActive: true,
  },
  {
    id: "2",
    title: "Corte de cabello mujer",
    description:
      "Nuestro servicio de peluquería ofrece cortes modernos y personalizados, realizados por estilistas expertos en un ambiente relajante. ¡Renueva tu look y luce siempre impecable!",
    category: {
      color: "",
      icon: "",
      id: 1,
      title: "Peluquería",
    },
    rates: [
      {
        name: "General",
        estimatedTime: "0",
        cost: 15000,
      },
    ],
    location: { id: 1, name: "Mosquera" },
    isActive: false,
  },
];

function ListServices() {
  return (
    <section className="flex flex-col gap-4 justify-between min-h-full relative">
      <div className="grid gap-5 relative">
        <TitleInfo
          infoText="Aquí encontraras tu lista de servicios creados."
          title="Tu lista de servicios"
        />
        {services.length > 0 ? (
          services.map((service) => (
            <ServiceCard key={service.title} serviceInfo={service} />
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
