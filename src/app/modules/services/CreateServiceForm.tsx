import {
  Accordion,
  AccordionItem,
  Input,
  Select,
  SelectItem,
  Textarea,
} from "@nextui-org/react";
import { Formik } from "formik";

function CreateServiceForm() {
  return (
    <Formik
      initialValues={{
        category: "",
        subCategory: "",
        serviceName: "",
        serviceDescription: "",
        valuePerHour: "",
        emoji: "",
      }}
      onSubmit={() => {}}
    >
      {({ errors, values, handleSubmit, setFieldValue }) => (
        <form
          className="grid gap-5"
          id="create-service-form"
          onSubmit={handleSubmit}
        >
          <Select
            isRequired
            id="category"
            label="Categoría"
            name="category"
            placeholder="Selecciona"
            value={values.category}
            variant="flat"
            onChange={(e) => setFieldValue("category", e.target.value)}
          >
            {[1].map((item) => (
              <SelectItem key={item}>{item}</SelectItem>
            ))}
          </Select>
          <Select
            isRequired
            id="subCategory"
            label="Sub categoría"
            name="subCategory"
            placeholder="Selecciona"
            value={values.subCategory}
            variant="flat"
            onChange={(e) => setFieldValue("subCategory", e.target.value)}
          >
            {[1].map((item) => (
              <SelectItem key={item}>{item}</SelectItem>
            ))}
          </Select>
          <Input
            isRequired
            required
            errorMessage={errors.serviceName}
            isInvalid={!!errors.serviceName}
            label="Nombre del servicio"
            placeholder="Clases de guitarra"
            value={values.serviceName}
            variant="flat"
            onChange={(e) => setFieldValue("serviceName", e.target.value)}
          />
          <Textarea
            isRequired
            required
            errorMessage={errors.serviceDescription}
            isInvalid={!!errors.serviceDescription}
            label="Descripción del servicio"
            value={values.serviceDescription}
            variant="flat"
            onChange={(e) =>
              setFieldValue("serviceDescription", e.target.value)
            }
          />
          <p className="text-primary">Personalizar tarifas del servicio</p>
          <Accordion showDivider className="shadow-sm" variant="shadow">
            <AccordionItem
              key="1"
              aria-label="Accordion 1"
              title="¿Qué es una tarifa de servicio?"
            >
              Para comenzar a ofrecer este servicio, primero debes definir un
              costo inicial. Puedes establecer diferentes tarifas para diversos
              aspectos del servicio, como el tipo de sexo, el escenario, o
              cualquier otra variante que consideres relevante. Estas
              configuraciones te permitirán aplicar distintos cargos según las
              características específicas de cada servicio que ofrezcas.
            </AccordionItem>
          </Accordion>
        </form>
      )}
    </Formik>
  );
}

export default CreateServiceForm;
