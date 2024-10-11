import ConfigLocationLayout from "@/components/ConfigLocationLayout";

async function AddLocation() {
  return (
    <ConfigLocationLayout
      isNewLocation
      subtitle="Agrega las ubicaciones donde vas a ofrecer tus servicios."
      title="Agrega tus ubicaciones"
    />
  );
}

export default AddLocation;
