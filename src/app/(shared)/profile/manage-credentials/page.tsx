import TitleInfo from "@/components/TitleInfo";
import UpdatePasswordForm from "@/app/modules/profile/UpdatePasswordForm";
import { auth } from "@/auth";
import WBreadcrumb, { BreadcrumbItem } from "@/components/WBreadcrumb";

const breadcrumbItems: BreadcrumbItem[] = [
  { text: "Perfil", href: "/profile" },
  { text: "Datos de acceso" },
];

async function ManageCredentials() {
  const session = await auth();

  return (
    <>
      <WBreadcrumb items={breadcrumbItems} />
      <TitleInfo
        infoText="En esta vista, puedes cambiar tus credenciales de acceso. "
        title="Cambiar Credenciales"
      />
      <UpdatePasswordForm user={session?.user} />
    </>
  );
}

export default ManageCredentials;
