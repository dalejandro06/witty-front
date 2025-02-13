import { Avatar } from "@heroui/react";
import { User } from "next-auth";
import React from "react";

type Props = {
  user?: User;
};

function CardAvatar({ user }: Props) {
  return (
    <div className="flex gap-5 shadow-xl py-4 px-6 items-center rounded-lg bg-white">
      <div className="flex justify-center items-center rounded-full ">
        <Avatar
          classNames={{
            base: "bg-secondary h-[50px] min-w-[50px]",
          }}
        />
      </div>
      <h1 className="font-bold text-lg">
        ¡Hola <strong className="mx-1 text-secondary">{user?.username}!</strong>
        Es genial tenerte por aquí.
      </h1>
    </div>
  );
}

export default CardAvatar;
