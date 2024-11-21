import { Avatar, Card, CardHeader } from "@nextui-org/react";
import React from "react";

import DropdownMenuDots from "./DropdownMenuDots";

import { RateFields } from "@/context/CreateServiceContext";

type Props = {
  rateData: RateFields;
};

function RateCard({ rateData }: Props) {
  const getTimeSpanText = () => {
    if (rateData.estimatedTime > 1) {
      return rateData.timeSpan ? "Horas" : "Minutos";
    }

    return rateData.timeSpan ? "Hora" : "Minuto";
  };

  return (
    <Card
      classNames={{
        base: "bg-gray-200 w-full",
      }}
      shadow="none"
    >
      <CardHeader className="justify-between px-0">
        <div className="flex gap-5 items-center">
          <Avatar
            classNames={{
              base: "bg-secondary",
            }}
            icon={<p>{rateData.emoji}</p>}
            radius="md"
            size="lg"
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">
              ${rateData.cost}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              {rateData.name}
            </h5>
            <p className="text-small tracking-tight text-default-500">
              {`${rateData.estimatedTime} ${getTimeSpanText()}`}
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
