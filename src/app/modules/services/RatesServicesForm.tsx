import { Button, Input } from "@nextui-org/react";
import { Formik } from "formik";

import RangeTimeInput from "@/components/RangeTimeInput";

type Props = {
  showForm: boolean;
  setShowForm: (v: boolean) => void;
};

function RatesServicesForm({ showForm, setShowForm }: Props) {
  const onCancelClick = () => {
    setShowForm(false);
  };

  if (!showForm) return null;

  return (
    <Formik
      initialValues={{
        rateName: "",
        rateEmoji: "",
        estimatedTime: "",
        valuePerHour: "",
        timeSpan: "",
      }}
      onSubmit={() => {}}
    >
      {({ errors, values, handleSubmit, setFieldValue }) => (
        <form
          className="grid gap-5"
          id="create-service-form"
          onSubmit={handleSubmit}
        >
          <Input
            isRequired
            required
            errorMessage={errors.rateName}
            isInvalid={!!errors.rateName}
            label="Nombre tarifa"
            placeholder="Costo general"
            value={values.rateName}
            variant="flat"
            onChange={(e) => setFieldValue("rateName", e.target.value)}
          />
          <Input
            isRequired
            required
            errorMessage={errors.rateEmoji}
            isInvalid={!!errors.rateEmoji}
            label="Emoji tarifa"
            placeholder="🎶"
            value={values.rateEmoji}
            variant="flat"
            onChange={(e) => setFieldValue("rateEmoji", e.target.value)}
          />
          <div className="grid grid-cols-2 gap-2 justify-items-stretch">
            <RangeTimeInput />
            <div>
              <p className="mb-2">Valor por servicio</p>
              <Input
                className="h-12"
                classNames={{ inputWrapper: "h-full" }}
                placeholder="$00,00"
              />
            </div>
          </div>
          <div className="flex gap-3">
            <Button
              fullWidth
              className="text-black"
              size="md"
              variant="bordered"
              onPress={onCancelClick}
            >
              Cancelar
            </Button>
            <Button
              fullWidth
              className="text-black"
              color="secondary"
              size="md"
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
