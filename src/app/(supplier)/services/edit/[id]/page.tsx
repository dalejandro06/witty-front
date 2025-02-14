type Props = {
  params: {
    id: string;
  };
};

function EditService({ params }: Props) {
  return <div>Editar servicio con el id {params.id}</div>;
}

export default EditService;
