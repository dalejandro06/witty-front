"use client";
import { Input } from "@nextui-org/input";
import { Formik } from "formik";
import { Select, SelectItem } from "@nextui-org/react";

import { UserData } from "@/types/ApiTypes";
import { useDepartments } from "@/hooks/useDepartments";

type Props = {
  userData: UserData;
};

function EditProfileForm({ userData }: Props) {
  const {
    departments,
    loadingDepartments,
    getCityByDepartment,
    cities,
    loadingCity,
  } = useDepartments();

  return (
    <Formik
      initialValues={{
        aboutMe: "",
        email: userData.email,
        phone: "",
        state: "",
        city: "",
        address: "",
        webPage: "",
        facebook: "",
        instagram: "",
      }}
      onSubmit={() => {}}
    >
      {({ errors, values, setFieldValue, handleSubmit }) => (
        <form
          className="grid gap-4"
          id="edit-profile-form"
          onSubmit={handleSubmit}
        >
          <Input
            isInvalid={!!errors.aboutMe}
            label="Sobre ti"
            type="text"
            value={values.aboutMe}
            variant="bordered"
            onChange={(e) => setFieldValue("aboutMe", e.target.value)}
          />
          <Input
            isInvalid={!!errors.email}
            label="Correo"
            type="email"
            value={values.email}
            variant="bordered"
            onChange={(e) => setFieldValue("email", e.target.value)}
          />
          <Input
            isInvalid={!!errors.phone}
            label="Teléfono"
            type="number"
            value={values.phone}
            variant="bordered"
            onChange={(e) => setFieldValue("phone", e.target.value)}
          />
          <Select
            isRequired
            errorMessage={errors.state}
            id="state"
            isInvalid={!!errors.state}
            isLoading={loadingDepartments}
            label="Departamento"
            name="state"
            placeholder="Selecciona"
            value={values.state}
            variant="bordered"
            onChange={(e) => {
              setFieldValue("", e.target.value);
              getCityByDepartment(e.target.value);
            }}
          >
            {departments.map((item) => (
              <SelectItem key={item.id}>{item.name}</SelectItem>
            ))}
          </Select>
          <Select
            isRequired
            errorMessage={errors.city}
            id="city"
            isInvalid={!!errors.city}
            isLoading={loadingCity}
            label="Ciudad"
            name="city"
            placeholder="Selecciona"
            value={values.city}
            variant="bordered"
            onChange={(e) => setFieldValue("city", e.target.value)}
          >
            {cities.map((animal) => (
              <SelectItem key={animal.id}>{animal.name}</SelectItem>
            ))}
          </Select>
          <Input
            isRequired
            errorMessage={errors.address}
            id="address"
            isInvalid={!!errors.address}
            label="Dirección física"
            name="address"
            placeholder="Carrera 00 # 0 - 0"
            type="text"
            value={values.address}
            variant="bordered"
            onChange={(e) => setFieldValue("address", e.target.value)}
          />
          <Input
            isRequired
            errorMessage={errors.facebook}
            id="facebook"
            isInvalid={!!errors.facebook}
            label="Facebook"
            name="facebook"
            placeholder="Somos Witty"
            type="text"
            value={values.facebook}
            variant="bordered"
            onChange={(e) => setFieldValue("facebook", e.target.value)}
          />
          <Input
            isRequired
            errorMessage={errors.instagram}
            id="instagram"
            isInvalid={!!errors.instagram}
            label="Instagram"
            name="instagram"
            placeholder="@tryWitty"
            type="text"
            value={values.instagram}
            variant="bordered"
            onChange={(e) => setFieldValue("instagram", e.target.value)}
          />
        </form>
      )}
    </Formik>
  );
}

export default EditProfileForm;
