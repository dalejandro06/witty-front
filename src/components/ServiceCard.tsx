"use client";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Avatar,
} from "@nextui-org/react";
import FeatherIcon from "feather-icons-react";
import { useRouter } from "next/navigation";
import { Key } from "react";

import DropdownMenuDots, { ItemMenuDot } from "./DropdownMenuDots";

function ServiceCard() {
  const router = useRouter();
  const handleAction = async (key: Key) => {
    switch (key) {
      case "delete":
        router.push(`/services`);
        break;
      case "edit":
        router.push(`/services`);
        break;

      default:
        break;
    }
    router.refresh();
  };

  const dotMenuItems: ItemMenuDot[] = [
    { key: "status", text: "Activar/Desactivar" },
    { key: "edit", text: "Editar" },
    { key: "delete", text: "Eliminar", color: "danger" },
  ];

  return (
    <Card className="p-4">
      <CardHeader className="flex gap-3 justify-between">
        <div className="flex gap-3">
          <Avatar
            classNames={{
              base: "bg-secondary",
            }}
            icon={<FeatherIcon icon="map-pin" />}
            radius="lg"
            size="lg"
          />
          <div>
            <p className="text-lg">Corte de cabello</p>
            <p className="text-start text-gray-500">Peluquería</p>
          </div>
        </div>
        <DropdownMenuDots handleAction={handleAction} items={dotMenuItems} />
      </CardHeader>

      <CardBody className="gap-4">
        <p className="text-sm text-gray-600">
          Nuestro servicio de peluquería ofrece cortes modernos y
          personalizados, realizados por estilistas expertos en un ambiente
          relajante. ¡Renueva tu look y luce siempre impecable!
        </p>
        <div className="flex flex-col gap-2">
          <p className="">Tarifas:</p>
          <Chip
            radius="sm"
            startContent={
              <div className="w-[10px] h-[10px] rounded-full bg-secondary" />
            }
            variant="bordered"
          >
            Corte caballero: <strong>$20.000 COP</strong>
          </Chip>
          <Chip
            radius="sm"
            startContent={
              <div className="w-[10px] h-[10px] rounded-full bg-secondary" />
            }
            variant="bordered"
          >
            Corte mujer: <strong>$30.000 COP</strong>
          </Chip>
        </div>
      </CardBody>
      <CardFooter className="flex-col items-start gap-2">
        <p>Ubicación</p>
        <div className="flex items-center gap-2">
          <FeatherIcon className="text-secondary" icon="map-pin" size={18} />
          <p className="text-small text-gray-500">Bogotá - Cundinamarca</p>
        </div>
      </CardFooter>
    </Card>
  );
}

export default ServiceCard;
