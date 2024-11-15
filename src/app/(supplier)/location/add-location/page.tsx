import { auth } from "@/auth";
import ConfigLocationLayout from "@/components/ConfigLocationLayout";
import WBreadcrumb from "@/components/WBreadcrumb";

async function AddLocation() {
  const session = await auth();

  return (
    <>
      <WBreadcrumb
        items={[
          { text: "Ubicaciones", href: "/location/saved-locations" },
          { text: "Nueva ubicación" },
        ]}
      />
      <ConfigLocationLayout
        subtitle="Agrega las ubicaciones donde vas a ofrecer tus servicios."
        title="Agrega tus ubicaciones"
        user={session?.user}
      />
    </>
  );
}

export default AddLocation;
