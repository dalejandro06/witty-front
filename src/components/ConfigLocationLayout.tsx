import { Button, Divider } from "@nextui-org/react";

import LocationForm from "@/app/modules/supplier-location/LocationForm";

type Props = {
  title: string;
  subtitle: string;
  isNewLocation?: boolean;
};

async function ConfigLocationLayout({ title, subtitle, isNewLocation }: Props) {
  return (
    <div className="py-5 px-6 relative h-full">
      <h1 className="text-3xl font-bold my-5">{title}</h1>
      <div className="flex items-center">
        <Divider className="w-[3px] h-[60px] me-3" orientation="vertical" />
        <p className="text-gray-500">{subtitle}</p>
      </div>
      <div className="mt-5">
        <LocationForm />
      </div>
      {!isNewLocation && (
        <div className="flex flex-col gap-5 mt-10">
          <Divider />
          <p>
            Cuentas con <strong className="text-secondary">5</strong> servicios
            asociados a esta ubicación.
          </p>
        </div>
      )}
      <Button fullWidth className="text-black" color="secondary" size="lg">
        {isNewLocation ? "Añadir ubicación" : "Editar ubicación"}
      </Button>
    </div>
  );
}

export default ConfigLocationLayout;
