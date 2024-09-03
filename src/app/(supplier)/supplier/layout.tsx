import { PropsWithChildren } from "react";
import { redirect } from "next/navigation";

import Navbar from "@/components/navbar";
import { auth } from "@/auth";

async function layout({ children }: PropsWithChildren) {
  const session = await auth();

  if (session === null) {
    redirect("/login");
  }

  return (
    <div className="bg-gray-200 min-h-screen">
      <Navbar />
      <div className="my-10 mx-6">{children}</div>
    </div>
  );
}

export default layout;
