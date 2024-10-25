"use client";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";

import InputPassword from "@/components/InputPassword";
import TitleInfo from "@/components/TitleInfo";

function ManageCredentials() {
  return (
    <div className="relative">
      <TitleInfo
        infoText="En esta vista, puedes cambiar tus credenciales de acceso. "
        title="Cambiar Credenciales"
      />
      <form className="flex flex-col gap-5 my-5">
        <Input
          isRequired
          id="email"
          label="Correo"
          name="email"
          placeholder="witty@email.com"
          type="text"
          variant="flat"
        />
        <InputPassword minLength={8} variant="flat" />
        <Button
          fullWidth
          className="relative bottom-0 py-6 text-black"
          color="secondary"
          type="submit"
        >
          Confirmar Cambios
        </Button>
      </form>
    </div>
  );
}

export default ManageCredentials;
