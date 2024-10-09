"use client";

import {
  Button,
  Input,
  Select,
  SelectItem,
  useDisclosure,
} from "@nextui-org/react";
import FeatherIcon from "feather-icons-react";
import { useFormik } from "formik";
import { User } from "next-auth";
import toast from "react-hot-toast";
import { signOut } from "next-auth/react";

import BusinessModal from "./BusinessModal";

import { useDepartments } from "@/hooks/useDepartments";
import { RegisterSupplierSchema } from "@/utils/FormSchemas";
import { registerSupplier } from "@/repositories/ApiRepository";

const typeBusiness = [
  { id: 0, name: "Propietario solo" },
  { id: 1, name: "Sociedad" },
  { id: 2, name: "Empresa" },
];

type Props = {
  user?: User;
};

function FormRegisterSupplier({ user }: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const {
    departments,
    loadingDepartments,
    getCityByDepartment,
    cities,
    loadingCity,
  } = useDepartments();

  const formik = useFormik({
    initialValues: {
      typeBusiness: "0",
      name: `${user?.firstName} ${user?.lastName}` || "",
      companyName: "",
      nit: "",
      email: user?.email || "",
      phoneNumber: "",
      department: "",
      city: "",
      address: "",
      webpage: "",
    },
    validateOnChange: false,
    validationSchema: RegisterSupplierSchema,
    async onSubmit(values) {
      try {
        const data = await registerSupplier({
          user: user?.id as string,
          state: values.department,
          city: values.city,
          supplier_name: values.companyName,
          complete_owner_name: values.name,
          email: values.email,
          phone_number: values.phoneNumber,
          physical_address: values.address,
          web_page: values.webpage,
          type_business: values.typeBusiness,
        });

        if (data.user) {
          toast.success(
            `¡Te has registrado con éxito ${data.complete_owner_name}!`,
          );
          await signOut();
        }
      } catch (error) {
        toast.error("Error al registrar al usuario");
      }
    },
  });

  return (
    <>
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
            selectedKeys={[formik.values.typeBusiness]}
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
          required
          errorMessage={formik.errors.name}
          id="name"
          isInvalid={!!formik.errors.name}
          label="Nombre completo"
          name="name"
          placeholder="Escribe tu nombre"
          value={formik.values.name}
          variant="bordered"
          onChange={formik.handleChange}
        />
        {formik.values.typeBusiness !== "0" && (
          <Input
            isRequired
            required
            errorMessage={formik.errors.companyName}
            id="companyName"
            isInvalid={!!formik.errors.companyName}
            label="Nombre del negocio"
            name="companyName"
            placeholder="Escribe el nombre del negocio"
            value={formik.values.companyName}
            variant="bordered"
            onChange={formik.handleChange}
          />
        )}
        {formik.values.typeBusiness === "2" && (
          <Input
            isRequired
            required
            description="Sin digito de verificación"
            errorMessage={formik.errors.nit}
            id="nit"
            isInvalid={!!formik.errors.nit}
            label="NIT"
            maxLength={9}
            name="nit"
            placeholder="XXX.XXX.XXX"
            type="text"
            value={formik.values.nit}
            variant="bordered"
            onChange={formik.handleChange}
          />
        )}
        <Input
          isRequired
          errorMessage={formik.errors.email}
          id="email"
          isInvalid={!!formik.errors.email}
          label="Correo"
          name="email"
          placeholder="wittyapp@example.com"
          type="text"
          value={formik.values.email}
          variant="bordered"
          onChange={formik.handleChange}
        />
        <Input
          isRequired
          errorMessage={formik.errors.phoneNumber}
          id="phoneNumber"
          isInvalid={!!formik.errors.phoneNumber}
          label="Número de teléfono"
          maxLength={10}
          minLength={10}
          name="phoneNumber"
          placeholder="000 000 0000"
          type="text"
          value={formik.values.phoneNumber}
          variant="bordered"
          onChange={formik.handleChange}
        />
        <Select
          isRequired
          errorMessage={formik.errors.department}
          id="department"
          isInvalid={!!formik.errors.department}
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
          errorMessage={formik.errors.city}
          id="city"
          isInvalid={!!formik.errors.city}
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
          errorMessage={formik.errors.address}
          id="address"
          isInvalid={!!formik.errors.address}
          label="Dirección"
          name="address"
          placeholder="Carrera 00 # 0 - 0"
          type="text"
          value={formik.values.address}
          variant="bordered"
          onChange={formik.handleChange}
        />
        {formik.values.typeBusiness === "2" && (
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
        )}
      </form>
      <BusinessModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}

export default FormRegisterSupplier;
