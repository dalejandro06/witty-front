import { Avatar, Card, CardHeader } from "@nextui-org/react";
import FeatherIcon from "feather-icons-react";
import React from "react";

import DropdownMenuDots from "./DropdownMenuDots";

type Props = {
  isDisabled?: boolean;
};

function RateCard({ isDisabled }: Props) {
  return (
    <Card
      classNames={{
        base: `bg-gray-200 w-full ${isDisabled && "grayscale"}`,
      }}
      shadow="none"
    >
      <CardHeader className="justify-between px-0">
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
              $ 00.00
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              Costo general
            </h5>
            <p className="text-small tracking-tight text-default-500">
              1 hora estimada
            </p>
          </div>
        </div>
        <DropdownMenuDots
          handleAction={() => {}}
          items={[
            { key: "edit", text: "Editar" },
            { key: "delete", text: "Eliminar", color: "danger" },
          ]}
        />
      </CardHeader>
    </Card>
  );
}

export default RateCard;
