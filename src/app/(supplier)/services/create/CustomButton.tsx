import { useContext, useEffect, useState } from "react";
import { Button } from "@heroui/react";
import toast from "react-hot-toast";

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
    if (step === TabsKeys.location) {
      // Llamar servicio de crear servicios
      toast.success("servicio creado con éxito");
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
      className="text-black z-10"
      color="secondary"
      isDisabled={isDisabled()}
      size="lg"
      type={typeButton}
      onPress={step !== TabsKeys.serviceInfo ? handleClick : undefined}
    >
      {step === TabsKeys.location ? "Crear servicio" : "Siguiente"}
    </Button>
  );
}

export default CustomButton;
