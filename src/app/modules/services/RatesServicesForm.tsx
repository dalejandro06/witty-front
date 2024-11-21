import { Button, Input } from "@nextui-org/react";
import { Formik } from "formik";
import { useContext } from "react";

import RangeTimeInput from "@/components/RangeTimeInput";
import { CreateServiceContext } from "@/context/CreateServiceContext";

type Props = {
  showForm: boolean;
  setShowForm: (v: boolean) => void;
};

function RatesServicesForm({ showForm, setShowForm }: Props) {
  const { setRates, rates } = useContext(CreateServiceContext);

  if (!showForm) return null;

  return (
    <Formik
      initialValues={{
        name: "",
        emoji: "",
        estimatedTime: 0,
        timeSpan: false,
        cost: "",
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
          <Input
            isRequired
            required
            errorMessage={errors.emoji}
            isInvalid={!!errors.emoji}
            label="Emoji tarifa"
            placeholder="🎶"
            value={values.emoji}
            variant="flat"
            onChange={(e) => setFieldValue("emoji", e.target.value)}
          />
          <div className="grid grid-cols-2 gap-2 justify-items-stretch">
            <RangeTimeInput
              handleAddValue={(val) => setFieldValue("estimatedTime", val + 1)}
              handleSubstractValue={(val) => {
                setFieldValue("estimatedTime", val === 0 ? 0 : val - 1);
              }}
              setValue={(val) => setFieldValue("estimatedTime", val)}
              timeSpanValue={values.timeSpan}
              value={values.estimatedTime}
              onChangeSwitch={(val) => setFieldValue("timeSpan", val)}
            />
            <div>
              <p className="mb-2">Valor por servicio</p>
              <Input
                isRequired
                required
                className="h-12"
                classNames={{ inputWrapper: "h-full" }}
                placeholder="$00,00"
                value={values.cost}
                onValueChange={(val) => setFieldValue("cost", val)}
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
