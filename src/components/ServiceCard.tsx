"use client";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Avatar,
  useDisclosure,
} from "@heroui/react";
import FeatherIcon from "feather-icons-react";
import { useRouter } from "next/navigation";
import { Key } from "react";

import DropdownMenuDots, { ItemMenuDot } from "./DropdownMenuDots";
import CustomModal from "./CustomModal";

import { RateFields } from "@/context/CreateServiceContext";
import { Category, State } from "@/types/ApiTypes";
import { currencyFormat } from "@/utils/formats";

type SupplierServiceInfo = {
  id: string;
  title: string;
  description: string;
  category: Category;
  rates: RateFields[];
  location: State;
  isActive?: boolean;
};

type Props = {
  serviceInfo: SupplierServiceInfo;
};

function ServiceCard({ serviceInfo }: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const router = useRouter();
  const handleAction = async (key: Key) => {
    switch (key) {
      case "delete":
        onOpen();
        break;
      case "edit":
        router.push(`/services/edit/${serviceInfo.id}`);
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
    <>
      <Card
        className={`p-4 ${!serviceInfo.isActive ? "filter grayscale" : ""}`}
      >
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
              <p className="text-lg">{serviceInfo.title}</p>
              <p className="text-start text-gray-500">
                {serviceInfo.category.title}
              </p>
            </div>
          </div>
          <DropdownMenuDots handleAction={handleAction} items={dotMenuItems} />
        </CardHeader>

        <CardBody className="gap-4">
          <p className="text-sm text-gray-600">{serviceInfo.description}</p>
          <div className="flex flex-col gap-2">
            <p className="">Tarifas:</p>
            {serviceInfo.rates.map((rate) => (
              <Chip
                key={`${rate.cost}-${rate.estimatedTime}-${rate.name}`}
                radius="sm"
                startContent={
                  <div className="w-[10px] h-[10px] rounded-full bg-secondary" />
                }
                variant="bordered"
              >
                {rate.name}: <strong>{currencyFormat(rate.cost)}</strong>
              </Chip>
            ))}
          </div>
        </CardBody>
        <CardFooter className="flex-col items-start gap-2">
          <p>Ubicación</p>
          <div className="flex items-center gap-2">
            <FeatherIcon className="text-secondary" icon="map-pin" size={18} />
            <p className="text-small text-gray-500">
              {serviceInfo.location.name}
            </p>
          </div>
        </CardFooter>
      </Card>
      <CustomModal
        body={
          <p className="text-center">
            Una vez que elimines, no habrá vuelta atrás ni posibilidad de
            recuperación.
          </p>
        }
        confirmButton={{
          text: "Si, eliminar",
          form: "forgotPasswordForm",
          type: "submit",
          color: "danger",
        }}
        isOpen={isOpen}
        title="¿Estás seguro de eliminar este servicio?"
        onOpenChange={onOpenChange}
      />
    </>
  );
}

export default ServiceCard;
