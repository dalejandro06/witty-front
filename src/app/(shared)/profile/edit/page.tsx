import { auth } from "@/auth";
import { getUserData } from "@/repositories/ApiRepository";
import EditProfileCard from "@/app/modules/profile/EditProfileCard";
import WBreadcrumb, { BreadcrumbItem } from "@/components/WBreadcrumb";

const breadcrumbItems: BreadcrumbItem[] = [
  { text: "Perfil", href: "/profile" },
  { text: "Perfil de servicios" },
];

async function Profile() {
  const session = await auth();
  const userData = await getUserData(session?.user.supplier?.id);

  return (
    <div className="grid gap-10">
      <WBreadcrumb items={breadcrumbItems} />
      <EditProfileCard session={session} userData={userData} />
    </div>
  );
}

export default Profile;
