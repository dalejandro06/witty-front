"use client";
import { Input, Link, useDisclosure } from "@nextui-org/react";

import CustomModal from "@/components/CustomModal";

function RecoverPasswordModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <p className="text-center mt-4">
        ¿Olvidaste tu contraseña?{" "}
        <Link className="font-bold" onPress={onOpen}>
          Recupérala
        </Link>
      </p>

      <CustomModal
        body={
          <div className="flex flex-col gap-2">
            <p>
              Ingresa tu correo para enviarte un enlace y restablecer tu
              contraseña.
            </p>
            <Input
              isRequired
              required
              id="email"
              label="Correo"
              name="email"
              placeholder="wittyapp@example.com"
              type="email"
              variant="bordered"
            />
          </div>
        }
        isOpen={isOpen}
        title="Recupera tu contraseña"
        onConfirmBtn={() => {}}
        onOpenChange={onOpenChange}
      />
    </>
  );
}

export default RecoverPasswordModal;
