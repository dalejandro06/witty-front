"use client";

import { useDisclosure, Button } from "@nextui-org/react";
import { signOut } from "next-auth/react";

import CustomModal from "./CustomModal";

function LogoutButton() {
  const handleLogout = async () => {
    await signOut({ callbackUrl: "/login" });
  };
  const { onOpen, onOpenChange, isOpen } = useDisclosure();

  return (
    <div>
      <Button
        fullWidth
        className="font-bold text-black py-6 bg-red-300"
        onPress={onOpen}
      >
        Cerrar Sesión
      </Button>
      <CustomModal
        body={
          <p className="text-2xl font-bold text-center">
            ¿Estas seguro de cerrar sesion?
          </p>
        }
        cancelButton={{
          text: "No, quedarme",
        }}
        confirmButton={{
          text: "Si, cerrar",
          onPress: handleLogout,
          color: "danger",
        }}
        footerClass="flex-col"
        isOpen={isOpen}
        modalProps={{ placement: "center", size: "sm" }}
        onOpenChange={onOpenChange}
      />
    </div>
  );
}

export default LogoutButton;
