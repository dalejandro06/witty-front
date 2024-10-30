import { Button, Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

import ProfileAvatar from "@/components/ProfileAvatar";
import { auth } from "@/auth";
import { getUserData } from "@/repositories/ApiRepository";
import EditProfileForm from "@/app/modules/profile/EditProfileForm";

async function Profile() {
  const session = await auth();
  const userData = await getUserData(session?.user.supplier?.id);

  return (
    <div className="pt-10 pb-20 grid gap-10">
      <Card className="py-6">
        <CardHeader className="flex flex-col justify-center">
          <ProfileAvatar className="w-26 h-26" />
          <h1 className="text-3xl mt-4 font-bold">
            {`${session?.user?.firstName} ${session?.user?.lastName}`}
          </h1>
          <p>@{session?.user.username}</p>
        </CardHeader>
        <Divider />
        <CardBody>
          <EditProfileForm userData={userData} />
        </CardBody>
      </Card>
      <Button className="text-black py-6" color="secondary">
        Guardar información
      </Button>
    </div>
  );
}

export default Profile;
