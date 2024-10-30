import { User } from "next-auth";
import React from "react";

import ProfileAvatar from "@/components/ProfileAvatar";

type Props = {
  user?: User;
  isSupplier: boolean;
};

function ProfileNameCard({ user, isSupplier }: Props) {
  const userRoleText = isSupplier ? "Proveedor de servicios" : "Cliente";

  return (
    <div className="flex gap-5 shadow-xl py-4 px-6 items-center rounded-lg bg-white">
      <div className="flex justify-center items-center rounded-full ">
        <ProfileAvatar className="w-16 h-16" />
      </div>
      <div>
        <h1 className="font-bold text-lg">
          {`${user?.firstName} ${user?.lastName}`}
        </h1>
        <p className="text-gray-500">{userRoleText}</p>
      </div>
    </div>
  );
}

export default ProfileNameCard;
