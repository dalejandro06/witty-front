import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Link,
} from "@nextui-org/react";

import ProfileAvatar from "@/components/ProfileAvatar";
import ProfileInfo from "@/components/ProfileInfo";
import { auth } from "@/auth";
import { getUserData } from "@/repositories/ApiRepository";

async function Profile() {
  const session = await auth();
  const userData = await getUserData(session?.user.supplier?.id);

  return (
    <section className="flex flex-col gap-4 justify-between min-h-full">
      <div className="grid gap-10">
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
            <p className="text-xl my-3">Sobre ti</p>
            <p className="text-gray-500 mb-4">
              {userData.profile_description ??
                "No tenemos información sobre ti"}
            </p>
            <ProfileInfo userData={userData} />
          </CardBody>
        </Card>
      </div>
      <Button
        as={Link}
        className="text-black py-6"
        color="secondary"
        href="/profile/edit"
      >
        Editar información
      </Button>
    </section>
  );
}

export default Profile;
