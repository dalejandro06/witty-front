import { auth } from "@/auth";
import ConfigLocationLayout from "@/components/ConfigLocationLayout";

async function AddLocation() {
  const session = await auth();

  return (
    <ConfigLocationLayout
      subtitle="Agrega las ubicaciones donde vas a ofrecer tus servicios."
      title="Agrega tus ubicaciones"
      user={session?.user}
    />
  );
}

export default AddLocation;
