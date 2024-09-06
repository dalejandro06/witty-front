"use client";
import { Formik } from "formik";
import toast from "react-hot-toast";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

import { RegisterSchema } from "./RegisterSchema";

import ApiRepository from "@/repositories/ApiRepository";
import InputPassword from "@/components/InputPassword";
import { useErrorHandler } from "@/utils/handleError";

function RegisterForm() {
  const errorHandler = useErrorHandler();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  return (
    <Formik
      initialValues={{
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        password: "",
      }}
      validateOnChange={false}
      validationSchema={RegisterSchema}
      onSubmit={(values) => {
        startTransition(async () => {
          try {
            const data = await ApiRepository.registerUser(values);

            toast.success(`¡Tu usuario ${data.username} se creo exitosamente!`);
            router.push("/login");
          } catch (error: unknown) {
            errorHandler({ description: "Hubo un error" });
          }
        });
      }}
    >
      {({ values, errors, setFieldValue, handleSubmit }) => (
        <form
          className="flex flex-col gap-5 my-5"
          id="registerForm"
          onSubmit={handleSubmit}
        >
          <Input
            isRequired
            required
            errorMessage={errors.first_name}
            label="Nombre"
            placeholder="Witty"
            type="text"
            value={values.first_name}
            variant="bordered"
            onChange={(e) => setFieldValue("first_name", e.target.value)}
          />
          <Input
            isRequired
            required
            label="Apellido"
            placeholder="Witty"
            type="text"
            value={values.last_name}
            variant="bordered"
            onChange={(e) => setFieldValue("last_name", e.target.value)}
          />
          <Input
            isRequired
            required
            errorMessage={errors.username}
            isInvalid={!!errors.username}
            label="Alias"
            placeholder="Witty App"
            type="error"
            value={values.username}
            variant="bordered"
            onChange={(e) => setFieldValue("username", e.target.value)}
          />
          <Input
            isRequired
            required
            errorMessage={errors.email}
            isInvalid={!!errors.email}
            label="Correo"
            placeholder="wittyapp@example.com"
            type="text"
            value={values.email}
            variant="bordered"
            onChange={(e) => setFieldValue("email", e.target.value)}
          />
          <InputPassword
            value={values.password}
            onChange={(e) => setFieldValue("password", e.target.value)}
          />
          <Button
            className="mt-5"
            color="primary"
            form="registerForm"
            isLoading={isPending}
            type="submit"
          >
            Regístrate
          </Button>
        </form>
      )}
    </Formik>
  );
}

export default RegisterForm;
