import { Input, Select, SelectItem, Textarea } from "@nextui-org/react";
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
        </form>
      )}
    </Formik>
  );
}

export default CreateServiceForm;
