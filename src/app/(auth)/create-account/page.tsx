"use client";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { Link } from "@nextui-org/link";
import { Formik } from "formik";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import Logo from "@/assets/Logo.svg";
import InputPassword from "@/components/InputPassword";
import FooterLogin from "@/app/modules/login/FooterLogin";
import { RegisterSchema } from "@/app/modules/create-account/RegisterSchema";
import { useErrorHandler } from "@/utils/handleError";
import ApiRepository from "@/repositories/ApiRepository";

function CreateNewAccount() {
  const errorHandler = useErrorHandler();
  const router = useRouter();

  return (
    <div className="pt-10 pb-20 px-6">
      <div className="flex flex-col my-10 items-center">
        <div>
          <Link href="/">
            <Image alt="Witty Logo" src={Logo} />
          </Link>
        </div>
        <p className="text-secondary-blue dark:text-white text-xl font-bold text-center mt-5">
          ¡Tu aventura de servicios comienza aquí!
        </p>
      </div>
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
          ApiRepository.registerUser(values)
            .then((data) => {
              toast.success(
                `¡Tu usuario ${data.username} se creo exitosamente!`,
              );
              router.push("/login");
            })
            .catch((err) => errorHandler({ description: err }));
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
              placeholder="Nombre"
              type="text"
              value={values.first_name}
              variant="bordered"
              onChange={(e) => setFieldValue("first_name", e.target.value)}
            />
            <Input
              isRequired
              required
              label="Apellido"
              placeholder="Apellido"
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
              placeholder="Alias"
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
              placeholder="Correo"
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
              type="submit"
            >
              Regístrate
            </Button>
          </form>
        )}
      </Formik>

      <div className="border-1 border-default-200 my-10" />
      <div className="d-flex text-center">
        <p>
          Al registrarte aceptas los{" "}
          <Link className="font-bold">Términos y Condiciones.</Link>
        </p>
        <p>
          A su vez autorizas el
          <Link className="font-bold">
            Tratamiento de los datos suministrados.
          </Link>
        </p>
      </div>
      <FooterLogin />
    </div>
  );
}

export default CreateNewAccount;
