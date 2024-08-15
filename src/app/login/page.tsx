"use client";
import { Input } from "@nextui-org/input";
import { Checkbox } from "@nextui-org/checkbox";
import { Button } from "@nextui-org/button";
import Image from "next/image";

import Logo from "@/src/assets/logo.png";
import InputPassword from "@/src/components/InputPassword";
import RecoverPasswordModal from "@/src/modules/login/RecoverPasswordModal";

function Login() {
  return (
    <div className="pt-16 px-6">
      <div className="flex flex-col my-10 items-center">
        <div>
          <Image alt="Witty Logo" src={Logo} />
        </div>
        <p className="text-secondary-blue dark:text-white text-xl font-bold text-center mt-5">
          ¡Bienvenido de nuevo a Witty!, Sigue encontrando, agendando y
          disfrutando de servicios.
        </p>
      </div>
      <form className="flex flex-col gap-5 my-5">
        <Input
          label="Correo"
          placeholder="Correo"
          type="email"
          variant="bordered"
        />
        <InputPassword />
        <div>
          <Checkbox defaultSelected className="mb-5">
            Recordar tu contraseña
          </Checkbox>
        </div>
        <Button color="primary" type="button">
          Ingresa
        </Button>
      </form>
      <div className="border-1 border-default-200 my-10" />
      <RecoverPasswordModal />
    </div>
  );
}

export default Login;
