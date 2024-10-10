import { Divider } from "@nextui-org/react";

import LocationForm from "@/app/modules/supplier-location/LocationForm";

async function EditLocation() {
  return (
    <div className="py-5 px-6 relative h-full">
      <h1 className="text-3xl font-bold my-5">Edita tu ubicación</h1>
      <div className="flex items-center">
        <Divider className="w-[3px] h-[60px] me-3" orientation="vertical" />
        <p className="text-gray-500">
          Al editar el Departamento o la Ciudad, esta ubicación se desvinculará
          de los servicios asociados.
        </p>
      </div>
      <div className="mt-5">
        <LocationForm />
      </div>
    </div>
  );
}

export default EditLocation;
