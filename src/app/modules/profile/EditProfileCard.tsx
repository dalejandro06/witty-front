"use client";

import { Button, Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import { Session } from "next-auth";
import { useState } from "react";

import EditProfileForm from "./EditProfileForm";

import ProfileAvatar from "@/components/ProfileAvatar";
import { UserData } from "@/types/ApiTypes";

type Props = {
  userData: UserData;
  session: Session | null;
};

function EditProfileCard({ userData, session }: Props) {
  const [file, setFile] = useState<File | null | undefined>(null);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Card className="py-6">
        <CardHeader className="flex flex-col justify-center">
          <ProfileAvatar
            isEdit
            className="w-26 h-26"
            file={file}
            setFile={setFile}
          />
          <h1 className="text-3xl mt-4 font-bold">
            {`${session?.user?.firstName} ${session?.user?.lastName}`}
          </h1>
          <p>@{session?.user.username}</p>
        </CardHeader>
        <Divider />
        <CardBody>
          <EditProfileForm
            profileImage={file}
            setLoading={setLoading}
            userData={userData}
          />
        </CardBody>
      </Card>
      <Button
        className="text-black py-6"
        color="secondary"
        form="edit-profile-form"
        isLoading={loading}
        type="submit"
      >
        Guardar información
      </Button>
    </>
  );
}

export default EditProfileCard;
