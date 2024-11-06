import ProfileNameCard from "@/app/modules/profile/ProfileNameCard";
import { auth } from "@/auth";
import TitleInfo from "@/components/TitleInfo";
import LinkProfileCard from "@/app/modules/profile/LinkProfileCard";
import SupplierBanner from "@/app/modules/client/SupplierBanner";
import LogoutButton from "@/components/LogoutButton";

async function Profile() {
  const session = await auth();
  const isSupplier = Boolean(session?.user.supplier?.id);

  return (
    <section className="flex flex-col justify-between min-h-full">
      <div className="grid gap-5 mb-4">
        <TitleInfo
          infoText="En esta vista, puedes ver opciones de tu perfil, además de cerrar tu
          sesión."
          title="Tu perfil"
        />
        <ProfileNameCard isSupplier={isSupplier} user={session?.user} />
        {isSupplier && (
          <LinkProfileCard
            infoText="Observa tu perfil y Edita tu foto e información personal."
            link="/profile/about"
            title="Perfil de servicios"
          />
        )}
        <LinkProfileCard
          infoText="Edita tu contraseña y correo para el ingreso a la aplicación."
          link="/profile/manage-credentials"
          title="Datos de acceso"
        />
        {!isSupplier && <SupplierBanner />}
      </div>
      <LogoutButton />
    </section>
  );
}

export default Profile;
