import { useContext, useEffect, useState } from "react";
import { Button } from "@nextui-org/react";

import { TabsKeys } from "@/types";
import {
  CreateServiceContext,
  RateFields,
} from "@/context/CreateServiceContext";

type Props = {
  step: TabsKeys;
  setSelectedTab: (v: TabsKeys) => void;
  rates: RateFields[];
};

function CustomButton({ step, setSelectedTab, rates }: Props) {
  const [props, setProps] = useState({});
  const { selectedLocations } = useContext(CreateServiceContext);

  useEffect(() => {
    if (step === TabsKeys.serviceInfo) {
      setProps({ ...props, form: "create-service-form" });
    } else {
      setProps({ ...props, form: null });
    }
  }, [step]);

  const handleClick = () => {
    if (step === TabsKeys.serviceRates) {
      setSelectedTab(TabsKeys.location);
    }
  };

  const isDisabled = () => {
    if (step === TabsKeys.serviceRates) {
      return !rates.length;
    } else if (step === TabsKeys.location) {
      return !selectedLocations.length;
    }
  };

  const typeButton = step === TabsKeys.serviceInfo ? "submit" : "button";

  return (
    <Button
      {...props}
      fullWidth
      className="text-black sticky bottom-0 z-10"
      color="secondary"
      isDisabled={isDisabled()}
      size="lg"
      type={typeButton}
      onClick={step !== TabsKeys.serviceInfo ? handleClick : undefined}
    >
      {step === TabsKeys.location ? "Crear servicio" : "Siguiente"}
    </Button>
  );
}

export default CustomButton;
