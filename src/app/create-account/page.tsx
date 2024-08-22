"use client";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { Link } from "@nextui-org/link";
import { Formik } from "formik";

import Logo from "@/src/assets/Logo.svg";
import InputPassword from "@/src/components/InputPassword";
import FooterLogin from "@/src/modules/login/FooterLogin";

function CreateNewAccount() {
  return (
    <div className="pt-10 px-6">
      <div className="flex flex-col my-10 items-center">
        <div>
          <Image alt="Witty Logo" src={Logo} />
        </div>
        <p className="text-secondary-blue dark:text-white text-xl font-bold text-center mt-5">
          ¡Tu aventura de servicios comienza aquí!
        </p>
      </div>
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          alias: "",
          email: "",
          password: "",
        }}
        onSubmit={(values) => {}}
      >
        {({ values, errors, setFieldValue, handleSubmit }) => (
          <form className="flex flex-col gap-5 my-5">
            <Input
              required
              label="Nombre"
              placeholder="Nombre"
              type="text"
              value={values.name}
              variant="bordered"
              onChange={(e) => setFieldValue("name", e.target.value)}
            />
            <Input
              label="Apellido"
              placeholder="Apellido"
              type="text"
              value={values.lastName}
              variant="bordered"
              onChange={(e) => setFieldValue("lastName", e.target.value)}
            />
            <Input
              required
              label="Alias"
              placeholder="Alias"
              type="text"
              value={values.alias}
              variant="bordered"
              onChange={(e) => setFieldValue("alias", e.target.value)}
            />
            <Input
              required
              label="Correo"
              placeholder="Correo"
              type="email"
              value={values.email}
              variant="bordered"
              onChange={(e) => setFieldValue("email", e.target.value)}
            />
            <InputPassword />
            <Button className="mt-5" color="primary" type="submit">
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
