import ConfigLocationLayout from "@/components/ConfigLocationLayout";

async function EditLocation() {
  return (
    <ConfigLocationLayout
      subtitle="Al editar el Departamento o la Ciudad, esta ubicación se desvinculará de los servicios asociados."
      title="Edita tu ubicación"
    />
  );
}

export default EditLocation;
