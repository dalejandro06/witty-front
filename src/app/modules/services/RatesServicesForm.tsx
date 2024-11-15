import { Button, Input, Switch } from "@nextui-org/react";
import FeatherIcon from "feather-icons-react";
import { Formik } from "formik";

function RatesServicesForm() {
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
          {/* TODO: arreglar desde aquí, abstraer a componentes y mejorar HTMl */}
          <div className="grid grid-cols-2 gap-2 justify-items-stretch">
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
