import { Button, Input, Select, SelectItem } from "@heroui/react";
import { Formik } from "formik";
import { useContext } from "react";

import {
  CreateServiceContext,
  RateFields,
} from "@/context/CreateServiceContext";
import { rangeSpanOptions } from "@/utils/rangeSpanOptions";

type Props = {
  showForm: boolean;
  setShowForm: (v: boolean) => void;
  rateData?: RateFields;
};

function RatesServicesForm({ showForm, setShowForm, rateData }: Props) {
  const { setRates, rates } = useContext(CreateServiceContext);

  if (!showForm) return null;

  return (
    <Formik
      initialValues={{
        name: rateData?.name || "",
        estimatedTime: rateData?.estimatedTime || 0,
        cost: rateData?.cost || 0,
      }}
      onSubmit={(values) => {
        setRates([...rates, values]);
      }}
    >
      {({ errors, values, handleSubmit, setFieldValue }) => (
        <form
          className="grid gap-5"
          id="rate-service-form"
          onSubmit={handleSubmit}
        >
          <Input
            isRequired
            required
            errorMessage={errors.name}
            isInvalid={!!errors.name}
            label="Nombre tarifa"
            placeholder="Costo general"
            value={values.name}
            variant="flat"
            onChange={(e) => setFieldValue("name", e.target.value)}
          />
          <div className="grid grid-cols-2 gap-2 justify-items-stretch">
            <div className="flex flex-col justify-between">
              <p>Tiempo estimado</p>
              <Select
                aria-label="Tiempo estimado"
                className="h-12"
                classNames={{ trigger: "h-12" }}
                placeholder="Selecciona un rango"
                onChange={(e) => setFieldValue("estimatedTime", e.target.value)}
              >
                {rangeSpanOptions.map((item) => (
                  <SelectItem key={item.id}>{item.description}</SelectItem>
                ))}
              </Select>
            </div>
            <div>
              <p className="mb-2">Valor por servicio</p>
              <Input
                isRequired
                required
                aria-label="Valor por servicio"
                className="h-12"
                classNames={{ inputWrapper: "h-full" }}
                placeholder="$00,00"
                value={
                  values.cost
                    ? new Intl.NumberFormat("es-CO").format(values.cost)
                    : undefined
                }
                onValueChange={(val) => {
                  // Replace format number for a clean one
                  // const regex = /^[0-9.,]+$/;
                  setFieldValue("cost", val.replace(/[ ,.]/g, ""));
                }}
              />
            </div>
          </div>
          <div className="flex gap-3">
            <Button
              fullWidth
              className="text-black"
              size="md"
              variant="bordered"
              onPress={() => setShowForm(false)}
            >
              Cancelar
            </Button>
            <Button
              fullWidth
              className="text-black"
              color="secondary"
              size="md"
              type="submit"
            >
              Añadir
            </Button>
          </div>
        </form>
      )}
    </Formik>
  );
}

export default RatesServicesForm;
