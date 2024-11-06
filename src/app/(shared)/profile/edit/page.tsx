import { auth } from "@/auth";
import { getUserData } from "@/repositories/ApiRepository";
import EditProfileCard from "@/app/modules/profile/EditProfileCard";

async function Profile() {
  const session = await auth();
  const userData = await getUserData(session?.user.supplier?.id);

  return (
    <div className="pt-10 grid gap-10">
      <EditProfileCard session={session} userData={userData} />
    </div>
  );
}

export default Profile;
