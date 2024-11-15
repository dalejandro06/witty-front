import {
  Button,
  Input,
  Select,
  SelectItem,
  Switch,
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
          <p className="text-primary">¿El cliente ira a tu ubicación?</p>
          <ul>
            <li>Sí, el cliente visitará la ubicación del servicio.</li>
            <li>No, tu te desplazarás a la ubicación del cliente.</li>
          </ul>
          <Switch
            defaultSelected
            color="secondary"
            endContent={<p>No</p>}
            size="lg"
            startContent={<p>Sí</p>}
          />
          <Button className="text-black" color="secondary" size="lg">
            Siguiente
          </Button>
        </form>
      )}
    </Formik>
  );
}

export default CreateServiceForm;
