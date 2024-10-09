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

type Props = {
  location: {
    city: string;
    department: string;
  };
  isPrincipal?: boolean;
};
function LocationCard({ isPrincipal, location }: Props) {
  return (
    <Card classNames={{ base: "bg-gray-200 w-full" }} shadow="none">
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
              {location.department}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              {location.city}
            </h5>
            {isPrincipal && (
              <p className="text-small tracking-tight text-default-400">
                Principal
              </p>
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
          <DropdownMenu aria-label="Static Actions" variant="shadow">
            <DropdownItem key="new">Editar</DropdownItem>
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
