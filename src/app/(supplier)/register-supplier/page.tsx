"use client";
import { Button, useDisclosure } from "@nextui-org/react";

import Navbar from "@/components/navbar";
import BusinessModal from "@/app/modules/register-supplier/BusinessModal";
import FormRegisterSupplier from "@/app/modules/register-supplier/FormRegisterSupplier";

function RegisterSupplier() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="bg-primary-blue">
      <Navbar session={null} showButton={false} />
      <div className="px-6 pb-5">
        <div className="font-bold text-4xl text-center text-white">
          <p className="uppercase">
            Regístrate como
            <span className="block text-linear-gradient mx-1">Proveedor</span>
            aquí
          </p>
        </div>
        <FormRegisterSupplier onOpen={onOpen} />
        <Button
          fullWidth
          className="text-black py-6"
          color="secondary"
          form="register-supplier-form"
          type="submit"
        >
          Regístrate
        </Button>
      </div>
      <BusinessModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}

export default RegisterSupplier;
