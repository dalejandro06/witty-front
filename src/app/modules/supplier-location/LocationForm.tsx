"use client";

import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Select,
  SelectItem,
  Switch,
} from "@nextui-org/react";
import { FormikValues, useFormik } from "formik";
import { User } from "next-auth";
import FeatherIcon from "feather-icons-react";

import { useDepartments } from "@/hooks/useDepartments";
import { SupplierLocation } from "@/types/ApiTypes";

type Props = {
  user?: User;
  onSubmit: (values: FormikValues) => void;
  formId: string;
  location?: SupplierLocation;
};

function LocationForm({ formId, onSubmit, location }: Props) {
  const {
    departments,
    loadingDepartments,
    getCityByDepartment,
    cities,
    loadingCity,
  } = useDepartments();

  const formik = useFormik({
    initialValues: {
      state: location?.state.id || 0,
      city: location?.city.id || 0,
      status: location?.status || true,
      availableAllServices: location?.available_all_services || true,
    },
    validateOnChange: false,
    onSubmit,
  });

  return (
    <form
      className="my-6 p-4 rounded-xl grid gap-5 relative"
      id={formId}
      onSubmit={formik.handleSubmit}
    >
      {location ? (
        <Card classNames={{ base: "mb-4" }} shadow="sm">
          <CardHeader className="gap-3">
            <Avatar
              classNames={{
                base: "bg-secondary",
              }}
              icon={<FeatherIcon icon="map-pin" />}
              radius="md"
              size="lg"
            />
            <p className="font-semibold text-xl">Ubicación seleccionada</p>
          </CardHeader>
          <CardBody className="justify-around">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="font-semibold">Departamento</p>
                <span className="text-gray-500">{location.state.name}</span>
              </div>
              <div className="justify-self-center">
                <p className="font-semibold">Ciudad</p>
                <span className="text-gray-500">{location.city.name}</span>
              </div>
            </div>
          </CardBody>
        </Card>
      ) : (
        <>
          <Select
            isRequired
            errorMessage={formik.errors.state}
            id="state"
            isDisabled={Boolean(location)}
            isInvalid={!!formik.errors.state}
            isLoading={loadingDepartments}
            label="Departamento"
            name="state"
            placeholder="Selecciona"
            value={formik.values.state}
            variant="flat"
            onChange={(e) => {
              formik.handleChange(e);
              getCityByDepartment(e.target.value);
            }}
          >
            {departments.map((item) => (
              <SelectItem key={item.id}>{item.name}</SelectItem>
            ))}
          </Select>
          <Select
            isRequired
            errorMessage={formik.errors.city}
            id="city"
            isDisabled={Boolean(location)}
            isInvalid={!!formik.errors.city}
            isLoading={loadingCity}
            label="Ciudad"
            name="city"
            placeholder="Selecciona"
            value={formik.values.city}
            variant="flat"
            onChange={formik.handleChange}
          >
            {cities.map((animal) => (
              <SelectItem key={animal.id}>{animal.name}</SelectItem>
            ))}
          </Select>
        </>
      )}
      <Switch
        color="secondary"
        id="status"
        isSelected={formik.values.status}
        name="status"
        onChange={formik.handleChange}
      >
        Desactivada / Activada
      </Switch>
      <Switch
        color="secondary"
        id="availableAllServices"
        isSelected={formik.values.availableAllServices}
        name="availableAllServices"
        onChange={formik.handleChange}
      >
        Añadir ubicación a nuevos servicios
      </Switch>
    </form>
  );
}

export default LocationForm;
