import { Button, Input, Switch } from "@nextui-org/react";
import FeatherIcon from "feather-icons-react";
import React from "react";

function RangeTimeInput() {
  return (
    <div className="grid gap-3">
      <div>
        <p className="mb-2">Tiempo estimado</p>
        <div className="flex gap-4">
          <Button isIconOnly className="h-12 w-14" color="secondary">
            <FeatherIcon icon="minus" />
          </Button>
          <Input
            isRequired
            required
            className="w-6/12"
            classNames={{ inputWrapper: "h-full" }}
            placeholder="0"
          />
          <Button isIconOnly className="h-12 w-14" color="secondary">
            <FeatherIcon icon="plus" />
          </Button>
        </div>
      </div>
      <Switch color="secondary">Minutos / Horas</Switch>
    </div>
  );
}

export default RangeTimeInput;
