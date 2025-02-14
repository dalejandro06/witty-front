import { Avatar, Card, CardHeader } from "@heroui/react";
import React, { Key, useContext } from "react";
import FeatherIcon from "feather-icons-react";

import DropdownMenuDots from "./DropdownMenuDots";

import {
  CreateServiceContext,
  RateFields,
} from "@/context/CreateServiceContext";
import { rangeSpanOptions } from "@/utils/rangeSpanOptions";
import { currencyFormat } from "@/utils/formats";

type Props = {
  rateData: RateFields;
};

function RateCard({ rateData }: Props) {
  const { setRates, rates } = useContext(CreateServiceContext);

  const estimatedTime = rangeSpanOptions.find(
    (item) => item.id === rateData.estimatedTime,
  );

  const handleActionMenu = (key: Key) => {
    switch (key) {
      case "edit":
        return;
      case "delete":
        const filtered = rates.filter((item) => item.name !== rateData.name);

        setRates(filtered);
      default:
        break;
    }
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
            icon={<FeatherIcon icon="shopping-bag" />}
            radius="md"
            size="lg"
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="font-semibold leading-none text-default-600">
              {rateData.name}
            </h4>
            <h5 className="text-small tracking-tight text-default-400">
              {currencyFormat(rateData.cost)}
            </h5>
            <p className="text-small tracking-tight text-default-500">
              {`${estimatedTime?.description}`}
            </p>
          </div>
        </div>
        <DropdownMenuDots
          handleAction={handleActionMenu}
          items={[{ key: "delete", text: "Eliminar", color: "danger" }]}
        />
      </CardHeader>
    </Card>
  );
}

export default RateCard;
