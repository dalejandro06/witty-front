"use client";
import { Button, Card, CardBody } from "@heroui/react";
import FeatherIcon from "feather-icons-react";
import { useSearchParams } from "next/navigation";

import ServiceCardClient from "@/app/modules/client/ServiceCardClient";

function ListServices() {
  const params = useSearchParams();

  const getServices = () => {
    const department = params.get("department");
    const city = params.get("city");
    const category = params.get("category");

    return [department, city, category];
  };

  getServices();

  return (
    <div className="grid gap-5">
      <Card radius="sm">
        <CardBody className="flex items-center flex-row justify-between">
          <div className="grid gap-2">
            <div>
              <p>Servicios desplegados en</p>
              <p className="small text-gray-500">Cundinamarca, Bogotá</p>
            </div>
            <div>
              <p>Categoría / Subcategoría</p>
              <p className="small text-gray-500">Belleza / Todos</p>
            </div>
          </div>
          <Button isIconOnly className="text-black" color="secondary">
            <FeatherIcon icon="filter" />
          </Button>
        </CardBody>
      </Card>
      <ServiceCardClient
        serviceInfo={{
          id: "1",
          title: "Peluqueria",
          description: "Description",
          category: { id: 1, title: "Peluqueria", color: "1", icon: "1" },
          rates: [{ name: "General", estimatedTime: 1, cost: 1 }],
          location: { id: 1, name: "Bogotá" },
        }}
      />
    </div>
  );
}

export default ListServices;
