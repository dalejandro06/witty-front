"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { User } from "next-auth";
import { Formik } from "formik";
import toast from "react-hot-toast";
import { useState } from "react";
import { useRouter } from "next/navigation";

import InputPassword from "@/components/InputPassword";
import { updatePassword } from "@/repositories/ApiRepository";
import { UpdatePasswordSchema } from "@/utils/FormSchemas";

type Props = {
  user?: User | null;
};

function UpdatePasswordForm({ user }: Props) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  return (
    <Formik
      initialValues={{
        old_password: "",
        new_password: "",
        confirm_new_password: "",
      }}
      validateOnChange={false}
      validationSchema={UpdatePasswordSchema}
      onSubmit={async (values) => {
        setLoading(true);
        try {
          const data = await updatePassword({
            old_password: values.old_password,
            new_password: values.new_password,
          });

          if (data.status) {
            toast.success("!Contraseña actualizada con éxito!");
            router.replace("/profile");
          } else {
            // TODO: mapear business error mejor
            toast.error(data?.message as string);
          }
        } catch (error) {
          toast.error("Hubo un error al actualizar tu contraseña");
        } finally {
          setLoading(false);
        }
      }}
    >
      {({ errors, values, handleSubmit, setFieldValue }) => (
        <form className="flex flex-col gap-5 my-5" onSubmit={handleSubmit}>
          <Input
            isDisabled
            id="email"
            label="Correo"
            name="email"
            placeholder="witty@email.com"
            type="text"
            value={user?.email as string}
            variant="flat"
          />
          <InputPassword
            description=""
            errorMessage={errors.old_password}
            id="old_password"
            isInvalid={!!errors.old_password}
            label="Contraseña anterior"
            minLength={8}
            value={values.old_password}
            variant="flat"
            onChange={(e) => setFieldValue("old_password", e.target.value)}
          />
          <InputPassword
            description=""
            errorMessage={errors.new_password}
            id="new_password"
            isInvalid={!!errors.new_password}
            label="Contraseña nueva"
            minLength={8}
            value={values.new_password}
            variant="flat"
            onChange={(e) => setFieldValue("new_password", e.target.value)}
          />
          <InputPassword
            errorMessage={errors.confirm_new_password}
            id="new_password_confirm"
            isInvalid={!!errors.confirm_new_password}
            label="Confirma tu contraseña nueva"
            minLength={8}
            value={values.confirm_new_password}
            variant="flat"
            onChange={(e) =>
              setFieldValue("confirm_new_password", e.target.value)
            }
          />
          <Button
            fullWidth
            className="relative bottom-0 py-6 text-black"
            color="secondary"
            isLoading={loading}
            type="submit"
          >
            Confirmar Cambios
          </Button>
        </form>
      )}
    </Formik>
  );
}

export default UpdatePasswordForm;
