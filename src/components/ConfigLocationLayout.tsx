"use client";
import { Button, Divider } from "@nextui-org/react";
import { FormikValues } from "formik";
import toast from "react-hot-toast";
import { User } from "next-auth";

import LocationForm from "@/app/modules/supplier-location/LocationForm";
import { addLocation, editLocation } from "@/repositories/ApiRepository";
import { SupplierLocation } from "@/types/ApiTypes";

type Props = {
  title: string;
  subtitle: string;
  user?: User;
  location?: SupplierLocation;
};

function ConfigLocationLayout({ user, title, subtitle, location }: Props) {
  const hasLocationToEdit = location && Object.keys(location).length > 1;

  const onSubmit = async (values: FormikValues) => {
    const payload = {
      state_id: Number(values.state),
      status: values.status,
      city_id: Number(values.city),
      supplier_profile_id: Number(user?.id),
      available_all_services: values.availableAllServices,
    };

    try {
      let data;

      if (hasLocationToEdit) {
        data = await editLocation({
          locationId: location.id,
          ...payload,
        });
      } else {
        data = await addLocation(payload);
      }

      if (data) {
        toast.success(
          `¡Ubicación ${hasLocationToEdit ? "agregada" : "actualizada"} con Éxito!`,
        );
      }
    } catch (error) {
      toast.error("Error al registrar la ubicación");
    }
  };

  return (
    <div className="py-5 px-6 relative h-full">
      <h1 className="text-3xl font-bold my-5">{title}</h1>
      <div className="flex items-center">
        <Divider className="w-[3px] h-[60px] me-3" orientation="vertical" />
        <p className="text-gray-500">{subtitle}</p>
      </div>
      <LocationForm
        formId="add-location-form"
        location={location}
        onSubmit={onSubmit}
      />
      {!hasLocationToEdit && (
        <div className="flex flex-col gap-5 mt-10">
          <Divider />
          <p>
            Cuentas con <strong className="text-secondary">5</strong> servicios
            asociados a esta ubicación.
          </p>
        </div>
      )}
      <Button
        fullWidth
        className="mt-4 text-black"
        color="secondary"
        form="add-location-form"
        size="lg"
        type="submit"
      >
        {hasLocationToEdit ? "Añadir ubicación" : "Editar ubicación"}
      </Button>
    </div>
  );
}

export default ConfigLocationLayout;
