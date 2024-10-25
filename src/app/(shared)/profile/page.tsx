import ProfileNameCard from "@/app/modules/profile/ProfileNameCard";
import { auth } from "@/auth";
import TitleInfo from "@/components/TitleInfo";
import LinkProfileCard from "@/app/modules/profile/LinkProfileCard";

async function Profile() {
  const session = await auth();

  return (
    <div className="grid gap-5">
      <TitleInfo
        infoText="En esta vista, puedes ver opciones de tu perfil, además de cerrar tu
          sesión."
        title="Tu perfil"
      />
      <ProfileNameCard user={session?.user} />
      <LinkProfileCard
        infoText="Observa tu perfil y Edita tu foto e información personal."
        link="/profile/about"
        title="Perfil de servicios"
      />
      <LinkProfileCard
        infoText="Edita tu contraseña y correo para el ingreso a la aplicación."
        link="/profile/manage-credentials"
        title="Datos de acceso"
      />
    </div>
  );
}

export default Profile;
