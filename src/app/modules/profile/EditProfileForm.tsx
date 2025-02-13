"use client";

import { Input, Textarea, Select, SelectItem } from "@heroui/react";
import { Formik } from "formik";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { UserData } from "@/types/ApiTypes";
import { useDepartments } from "@/hooks/useDepartments";
import { EditProfileSchema } from "@/utils/FormSchemas";
import { updateUserData } from "@/repositories/ApiRepository";

type Props = {
  userData: UserData;
  profileImage?: File | null;
  setLoading: (v: boolean) => void;
};

function EditProfileForm({ userData, profileImage, setLoading }: Props) {
  const {
    departments,
    loadingDepartments,
    getCityByDepartment,
    cities,
    loadingCity,
  } = useDepartments();
  const router = useRouter();

  useEffect(() => {
    if (userData.state.id) {
      getCityByDepartment(userData.state.id.toString());
    }
  }, [userData.state.id]);

  return (
    <Formik
      initialValues={{
        aboutMe: userData.profile_description,
        email: userData.email,
        phone: userData.phone_number,
        state: userData.state.id,
        city: userData.city.id,
        address: userData.physical_address,
        webPage: userData.web_page,
        facebook: userData.facebook_page,
        instagram: userData.instagram_page,
      }}
      validateOnChange={false}
      validationSchema={EditProfileSchema}
      onSubmit={async (values) => {
        setLoading(true);
        try {
          // TODO: this not works when upload a Blob file
          await updateUserData({
            user_id: userData.id,
            image_supplier: profileImage,
            profile_description: values?.aboutMe,
            email: values.email,
            phone_number: values.phone,
            state_id: values.state,
            city_id: values.city,
            physical_address: values.address,
            web_page: values.webPage,
            facebook_page: values.facebook,
            instagram_page: values.instagram,
          });

          toast.success("!Tus datos se han actualizado con éxito!");
          router.replace("/profile/about");
          router.refresh();
        } catch (error) {
          toast.error("Hubo un error al actualizar tus datos");
        } finally {
          setLoading(false);
        }
      }}
    >
      {({ errors, values, setFieldValue, handleSubmit }) => (
        <form
          className="grid gap-4"
          id="edit-profile-form"
          onSubmit={handleSubmit}
        >
          <Textarea
            errorMessage={errors.aboutMe}
            isInvalid={!!errors.aboutMe}
            label="Sobre ti"
            type="text"
            value={values.aboutMe}
            variant="bordered"
            onChange={(e) => setFieldValue("aboutMe", e.target.value)}
          />
          <Input
            description="Este correo es solo para notificaciones"
            errorMessage={errors.email}
            isInvalid={!!errors.email}
            label="Correo"
            type="email"
            value={values.email}
            variant="bordered"
            onChange={(e) => setFieldValue("email", e.target.value)}
          />
          <Input
            errorMessage={errors.phone}
            isInvalid={!!errors.phone}
            label="Teléfono"
            type="number"
            value={values.phone}
            variant="bordered"
            onChange={(e) => setFieldValue("phone", e.target.value)}
          />
          <Select
            isRequired
            defaultSelectedKeys={[userData.state.id.toString()]}
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
              setFieldValue("state", e.target.value);
              getCityByDepartment(e.target.value);
            }}
          >
            {departments.map((item) => (
              <SelectItem key={item.id}>{item.name}</SelectItem>
            ))}
          </Select>
          <Select
            isRequired
            defaultSelectedKeys={[userData.city.id.toString()]}
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
            {cities.map((city) => (
              <SelectItem key={city.id}>{city.name}</SelectItem>
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
          <Input
            errorMessage={errors.webPage}
            id="webPage"
            isInvalid={!!errors.webPage}
            label="Pagina Web"
            name="webPage"
            placeholder="trywitty.co"
            type="text"
            value={values.webPage}
            variant="bordered"
            onChange={(e) => setFieldValue("webPage", e.target.value)}
          />
        </form>
      )}
    </Formik>
  );
}

export default EditProfileForm;
