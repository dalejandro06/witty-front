import { Button } from "@nextui-org/react";

import FormRegisterSupplier from "@/app/modules/register-supplier/FormRegisterSupplier";
import { auth } from "@/auth";

async function RegisterSupplier() {
  const session = await auth();

  return (
    <div className="bg-primary-blue">
      <div className="px-6 py-5">
        <div className="font-bold text-4xl text-center text-white">
          <p className="uppercase">
            Regístrate como
            <span className="block text-linear-gradient mx-1">Proveedor</span>
            aquí
          </p>
        </div>
        <FormRegisterSupplier user={session?.user} />
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
    </div>
  );
}

export default RegisterSupplier;
