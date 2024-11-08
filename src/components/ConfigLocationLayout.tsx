"use client";
import { Button, Divider } from "@nextui-org/react";
import { FormikValues } from "formik";
import toast from "react-hot-toast";
import { User } from "next-auth";
import { useState } from "react";
import { useRouter } from "next/navigation";

import TitleInfo from "./TitleInfo";

import LocationForm from "@/app/modules/supplier-location/LocationForm";
import { addLocation, editLocation } from "@/repositories/ApiRepository";
import { SupplierLocation } from "@/types/ApiTypes";

type Props = {
  title: string;
  subtitle: string;
  user: User | undefined;
  location?: SupplierLocation;
};

function ConfigLocationLayout({ user, title, subtitle, location }: Props) {
  const hasLocationToEdit = location && Object.keys(location).length > 1;
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = async (values: FormikValues) => {
    setLoading(true);
    const payload = {
      state_id: Number(values.state),
      status: values.status,
      city_id: Number(values.city),
      supplier_profile_id: Number(user?.supplier?.id),
      available_all_services: values.availableAllServices,
    };

    try {
      let data;

      if (hasLocationToEdit) {
        data = await editLocation({
          locationId: location.id,
          status: values.status,
          supplier_profile_id: Number(user?.supplier?.id),
          available_all_services: values.availableAllServices,
        });
      } else {
        data = await addLocation(payload);
      }

      if (data) {
        toast.success(
          `¡Ubicación ${hasLocationToEdit ? "agregada" : "actualizada"} con Éxito!`,
        );
        router.push("/location/saved-locations");
        router.refresh();
      }
    } catch (error) {
      toast.error("Error al registrar la ubicación");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-5 relative h-full">
      <TitleInfo infoText={subtitle} title={title} />
      <LocationForm
        formId="add-location-form"
        location={location}
        onSubmit={onSubmit}
      />
      {hasLocationToEdit && (
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
        className="my-4 text-black"
        color="secondary"
        form="add-location-form"
        isLoading={loading}
        size="lg"
        type="submit"
      >
        {hasLocationToEdit ? "Editar ubicación" : "Añadir ubicación"}
      </Button>
    </div>
  );
}

export default ConfigLocationLayout;
