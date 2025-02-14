"use client";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Avatar,
  Divider,
  Button,
} from "@heroui/react";
import FeatherIcon from "feather-icons-react";

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
};

type Props = {
  serviceInfo: SupplierServiceInfo;
};

function ServiceCardClient({ serviceInfo }: Props) {
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
            <p className="text-lg">{serviceInfo.title}</p>
            <p className="text-start text-gray-500">
              {serviceInfo.category.title}
            </p>
          </div>
        </div>
        <FeatherIcon className="text-warning" icon="bookmark" />
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
          <p className="mt-3">Cobertura del servicio</p>
          <div className="flex items-center gap-2">
            <FeatherIcon className="text-secondary" icon="map-pin" size={18} />
            <p className="text-small text-gray-500">
              {serviceInfo.location.name}
            </p>
          </div>
        </div>
      </CardBody>
      <Divider />
      <CardFooter className="flex-col items-stretch gap-5">
        <div className="flex items-center gap-4">
          <Avatar
            isBordered
            color="success"
            src="https://i.pravatar.cc/150?u=a04258114e29026302d"
          />
          <div>
            <p>Pablo Torres</p>
            <span>Proveedor de servicios</span>
          </div>
        </div>
        <Button className="py-6 text-black text-md" color="secondary">
          Ver más detalles
        </Button>
      </CardFooter>
    </Card>
  );
}

export default ServiceCardClient;
