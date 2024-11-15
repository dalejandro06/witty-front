import { auth } from "@/auth";
import ConfigLocationLayout from "@/components/ConfigLocationLayout";
import WBreadcrumb from "@/components/WBreadcrumb";
import { getLocationById } from "@/repositories/ApiRepository";

type Props = {
  params: { id: string };
};

async function EditLocation({ params }: Props) {
  const location = await getLocationById({ id: params.id });
  const session = await auth();

  return (
    <>
      <WBreadcrumb
        items={[
          { text: "Ubicaciones", href: "/location/saved-locations" },
          { text: "Editar ubicación" },
        ]}
      />
      <ConfigLocationLayout
        location={location}
        subtitle="Al editar el Departamento o la Ciudad, esta ubicación se desvinculará de los servicios asociados."
        title="Edita tu ubicación"
        user={session?.user}
      />
    </>
  );
}

export default EditLocation;
