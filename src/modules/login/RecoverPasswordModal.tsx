"use client";
import { Link, useDisclosure } from "@nextui-org/react";

import CustomModal from "@/src/components/CustomModal";

function RecoverPasswordModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <p className="text-center">
        ¿Olvidaste tu contraseña?{" "}
        <Link className="font-bold" onPress={onOpen}>
          Recupérala
        </Link>
      </p>

      <CustomModal
        body={
          <p>
            Enviaremos una link al correo{" "}
            <strong className="text-secondary-blue">
              wittyapp@example.com
            </strong>{" "}
            para que puedas restablecer tu contraseña.
          </p>
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
