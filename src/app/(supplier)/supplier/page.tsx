"use client";
import { Avatar } from "@nextui-org/react";
import { useSession } from "next-auth/react";

function Supplier() {
  const { data: session } = useSession();

  // TODO: la primera vez me llega siempre en undefined
  if (!session) return <h1>Cargando...</h1>;

  return (
    <div>
      <div className="flex gap-5 shadow-xl py-4 px-6 items-center rounded-lg bg-white">
        <div className="flex justify-center items-center rounded-full ">
          <Avatar
            classNames={{
              base: "bg-secondary h-[50px] min-w-[50px]",
            }}
          />
        </div>
        <h1 className="font-bold text-lg">
          ¡Hola{" "}
          <strong className="mx-1 text-secondary">
            {session?.user.username}!
          </strong>
          Es genial tenerte por aquí.
        </h1>
      </div>
    </div>
  );
}

export default Supplier;
