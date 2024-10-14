"use client";
import {
  Avatar,
  Button,
  Card,
  CardHeader,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import FeatherIcon from "feather-icons-react";
import { Key } from "react";
import { useRouter } from "next/navigation";

import { deleteSupplierLocation } from "@/repositories/ApiRepository";
import { SupplierLocation } from "@/types/ApiTypes";

type Props = {
  location: SupplierLocation;
  isDisabled: boolean;
  isPrincipal?: boolean;
};
function LocationCard({ isPrincipal, location, isDisabled }: Props) {
  const router = useRouter();
  const handleAction = async (key: Key) => {
    switch (key) {
      case "delete":
        await deleteSupplierLocation(location.id);
        break;
      case "edit":
        router.push(`/location/edit-location/${location.id}`);
        break;

      default:
        break;
    }
    router.refresh();
  };

  return (
    <Card
      classNames={{ base: `bg-gray-200 w-full ${isDisabled && "grayscale"}` }}
      shadow="none"
    >
      <CardHeader className="justify-between">
        <div className="flex gap-5 items-center">
          <Avatar
            classNames={{
              base: "bg-secondary",
            }}
            icon={<FeatherIcon icon="map-pin" />}
            radius="md"
            size="lg"
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              {location.city.name}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              {location.state.name}
            </h5>
            {isPrincipal && (
              <div className="flex gap-2 items-center">
                <div className="w-[8px] h-[8px] block bg-secondary rounded-full" />
                <p className="text-small tracking-tight text-default-500">
                  Principal
                </p>
              </div>
            )}
          </div>
        </div>
        <Dropdown>
          <DropdownTrigger>
            <Button
              isIconOnly
              className="bg-transparent text-foreground border-default-200"
              color="primary"
              radius="full"
              size="sm"
            >
              <FeatherIcon icon="more-vertical" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Static Actions"
            variant="shadow"
            onAction={handleAction}
          >
            <DropdownItem key="edit">Editar</DropdownItem>
            <DropdownItem key="delete" className="text-danger" color="danger">
              Eliminar
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </CardHeader>
    </Card>
  );
}

export default LocationCard;
