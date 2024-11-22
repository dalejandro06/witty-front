import {
  Button,
  Input,
  Select,
  SelectItem,
  Switch,
  Textarea,
} from "@nextui-org/react";
import { Formik } from "formik";
import { useContext, useEffect } from "react";

import { CreateServiceContext } from "@/context/CreateServiceContext";
import { useCategories } from "@/hooks/useCategories";
import { TabsKeys } from "@/types";

type Props = {
  setSelectedTab: (v: TabsKeys) => void;
};

function CreateServiceForm({ setSelectedTab }: Props) {
  const { basicData, setBasicData } = useContext(CreateServiceContext);
  const {
    categories,
    loadingCategories,
    getSubCategoriesByCategoryId,
    subCategories,
    loadingSubCategory,
  } = useCategories();

  useEffect(() => {
    if (basicData.category) {
      getSubCategoriesByCategoryId(Number(basicData.category));
    }
  }, [basicData]);

  return (
    <Formik
      initialValues={{
        category: basicData.category,
        subCategory: basicData.subCategory,
        serviceName: basicData.serviceName,
        serviceDescription: basicData.serviceDescription,
        locationMode: basicData.locationMode,
      }}
      onSubmit={(values) => {
        setBasicData(values);
        setSelectedTab(TabsKeys.serviceRates);
      }}
    >
      {({ errors, values, handleSubmit, setFieldValue }) => (
        <form
          className="grid gap-5"
          id="create-service-form"
          onSubmit={handleSubmit}
        >
          <Select
            isRequired
            defaultSelectedKeys={[basicData.category?.toString() || ""]}
            id="category"
            isLoading={loadingCategories}
            label="Categoría"
            name="category"
            placeholder="Selecciona"
            value={values.category}
            variant="flat"
            onChange={(e) => {
              setFieldValue("category", e.target.value);
              getSubCategoriesByCategoryId(Number(e.target.value));
            }}
          >
            {categories.map((item) => (
              <SelectItem key={item.id}>{item.title}</SelectItem>
            ))}
          </Select>
          <Select
            isRequired
            defaultSelectedKeys={[basicData.subCategory?.toString() || ""]}
            id="subCategory"
            isLoading={loadingSubCategory}
            label="Sub categoría"
            name="subCategory"
            placeholder="Selecciona"
            value={values.subCategory}
            variant="flat"
            onChange={(e) => setFieldValue("subCategory", e.target.value)}
          >
            {subCategories.map((item) => (
              <SelectItem key={item.id}>{item.title}</SelectItem>
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
            color="secondary"
            defaultSelected={basicData.locationMode}
            endContent={<p>No</p>}
            isSelected={values.locationMode}
            size="lg"
            startContent={<p>Sí</p>}
            onValueChange={(val) => setFieldValue("locationMode", val)}
          />
          <Button
            className="text-black"
            color="secondary"
            form="create-service-form"
            size="lg"
            type="submit"
          >
            Siguiente
          </Button>
        </form>
      )}
    </Formik>
  );
}

export default CreateServiceForm;
