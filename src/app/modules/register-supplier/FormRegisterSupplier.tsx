"use client";

import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import FeatherIcon from "feather-icons-react";
import { useFormik } from "formik";

import { useDepartments } from "@/hooks/useDepartments";

const typeBusiness = [
  { id: 0, name: "Propietario solo" },
  { id: 1, name: "Sociedad" },
  { id: 2, name: "Empresa" },
];

type Props = {
  onOpen: () => void;
};

function FormRegisterSupplier({ onOpen }: Props) {
  const {
    departments,
    loadingDepartments,
    getCityByDepartment,
    cities,
    loadingCity,
  } = useDepartments();

  const formik = useFormik({
    initialValues: {
      typeBusiness: "",
      name: "",
      companyName: "",
      nit: "",
      email: "",
      phoneNumber: "",
      department: "",
      city: "",
      address: "",
      webpage: "",
    },
    onSubmit() {},
  });

  return (
    <form
      className="my-6 bg-white p-4 rounded-xl grid gap-5"
      id="register-supplier-form"
      onSubmit={formik.handleSubmit}
    >
      <div className="grid grid-cols-5">
        <Select
          isRequired
          className="col-span-4"
          classNames={{
            trigger: "rounded-e-none border-e-none",
          }}
          id="typeBusiness"
          label="Tipo de negocio"
          name="typeBusiness"
          placeholder="Selecciona"
          value={formik.values.typeBusiness}
          variant="bordered"
          onChange={formik.handleChange}
        >
          {typeBusiness.map((item) => (
            <SelectItem key={item.id}>{item.name}</SelectItem>
          ))}
        </Select>
        <Button
          className="border-gray-200 p-0 min-w-0 h-full rounded-s-none border-s-0"
          variant="bordered"
          onPress={onOpen}
        >
          <FeatherIcon icon="info" />
        </Button>
      </div>
      <Input
        isRequired
        id="name"
        isInvalid={!!formik.errors.name}
        label="Nombre completo"
        name="name"
        placeholder="Escribe tu nombre"
        value={formik.values.name}
        variant="bordered"
        onChange={formik.handleChange}
      />
      <Input
        isRequired
        id="companyName"
        label="Nombre del negocio"
        name="companyName"
        placeholder="Escribe el nombre del negocio"
        value={formik.values.companyName}
        variant="bordered"
        onChange={formik.handleChange}
      />
      <Input
        isRequired
        id="nit"
        label="NIT"
        name="nit"
        placeholder="Sin digito de verificación"
        value={formik.values.nit}
        variant="bordered"
        onChange={formik.handleChange}
      />
      <Input
        isRequired
        id="email"
        label="Correo"
        name="email"
        placeholder="wittyapp@example.com"
        type="email"
        value={formik.values.email}
        variant="bordered"
        onChange={formik.handleChange}
      />
      <Input
        isRequired
        id="phoneNumber"
        label="Número de teléfono"
        name="phoneNumber"
        placeholder="000 000 0000"
        type="number"
        value={formik.values.phoneNumber}
        variant="bordered"
        onChange={formik.handleChange}
      />
      <Select
        isRequired
        id="department"
        isLoading={loadingDepartments}
        label="Departamento"
        name="department"
        placeholder="Selecciona"
        value={formik.values.department}
        variant="bordered"
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
        id="city"
        isLoading={loadingCity}
        label="Ciudad"
        name="city"
        placeholder="Selecciona"
        value={formik.values.city}
        variant="bordered"
        onChange={formik.handleChange}
      >
        {cities.map((animal) => (
          <SelectItem key={animal.id}>{animal.name}</SelectItem>
        ))}
      </Select>
      <Input
        isRequired
        id="address"
        label="Dirección física"
        name="address"
        placeholder="Carrera 00 # 0 - 0"
        type="text"
        value={formik.values.address}
        variant="bordered"
        onChange={formik.handleChange}
      />
      <Input
        id="webpage"
        label="Pagina Web (Opcional)"
        name="webpage"
        placeholder="https://.mysite.com"
        type="text"
        value={formik.values.webpage}
        variant="bordered"
        onChange={formik.handleChange}
      />
    </form>
  );
}

export default FormRegisterSupplier;
