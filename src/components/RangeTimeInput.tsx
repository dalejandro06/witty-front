import { Button, Input, Switch } from "@heroui/react";
import FeatherIcon from "feather-icons-react";
import React from "react";

type Props = {
  value: number;
  setValue: (v: number) => void;
  handleAddValue: (v: number) => void;
  handleSubstractValue: (v: number) => void;
  timeSpanValue: boolean;
  onChangeSwitch: (v: boolean) => void;
};

function RangeTimeInput({
  value,
  setValue,
  handleSubstractValue,
  handleAddValue,
  timeSpanValue,
  onChangeSwitch,
}: Props) {
  return (
    <div className="grid gap-3">
      <div>
        <p className="mb-2">Tiempo estimado</p>
        <div className="flex gap-4">
          <Button
            isIconOnly
            className="h-12 w-14"
            color="secondary"
            onPress={() => handleSubstractValue(value)}
          >
            <FeatherIcon icon="minus" />
          </Button>
          <Input
            isRequired
            required
            className="w-6/12"
            classNames={{ inputWrapper: "h-full" }}
            placeholder="0"
            value={value.toString()}
            onValueChange={(val) => setValue(Number(val))}
          />
          <Button
            isIconOnly
            className="h-12 w-14"
            color="secondary"
            onPress={() => handleAddValue(value)}
          >
            <FeatherIcon icon="plus" />
          </Button>
        </div>
      </div>
      <Switch
        color="secondary"
        isSelected={timeSpanValue}
        onValueChange={onChangeSwitch}
      >
        Minutos / Horas
      </Switch>
    </div>
  );
}

export default RangeTimeInput;
