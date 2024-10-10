"use client";

import { Button, Divider, Select, SelectItem, Switch } from "@nextui-org/react";
import { useFormik } from "formik";
import { User } from "next-auth";
import toast from "react-hot-toast";
import { signOut } from "next-auth/react";

import { useDepartments } from "@/hooks/useDepartments";
import { RegisterSupplierSchema } from "@/utils/FormSchemas";
import { registerSupplier } from "@/repositories/ApiRepository";

type Props = {
  user?: User;
};

function LocationForm({ user }: Props) {
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
        className="my-6 p-4 rounded-xl grid gap-5 relative"
        id="register-supplier-form"
        onSubmit={formik.handleSubmit}
      >
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
        <Switch defaultSelected color="secondary">
          Desactivada / Activada
        </Switch>
        <Switch color="secondary">Añadir ubicación a nuevos servicios</Switch>

        <div className="flex flex-col gap-5 mt-10">
          <Divider />
          <p>
            Cuentas con <strong className="text-secondary">5</strong> servicios
            asociados a esta ubicación.
          </p>
          <Button fullWidth className="text-black" color="secondary" size="lg">
            Editar ubicación
          </Button>
        </div>
      </form>
    </>
  );
}

export default LocationForm;
