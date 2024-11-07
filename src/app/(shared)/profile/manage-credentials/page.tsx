import TitleInfo from "@/components/TitleInfo";
import UpdatePasswordForm from "@/app/modules/profile/UpdatePasswordForm";
import { auth } from "@/auth";

async function ManageCredentials() {
  const session = await auth();

  return (
    <>
      <TitleInfo
        infoText="En esta vista, puedes cambiar tus credenciales de acceso. "
        title="Cambiar Credenciales"
      />
      <UpdatePasswordForm user={session?.user} />
    </>
  );
}

export default ManageCredentials;
