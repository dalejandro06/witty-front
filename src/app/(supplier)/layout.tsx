import { PropsWithChildren } from "react";
import { redirect } from "next/navigation";

import { auth } from "@/auth";
import Navbar from "@/components/navbar";
import Navigation from "@/components/Navigation";

async function layout({ children }: PropsWithChildren) {
  const session = await auth();

  if (!session || !session.user) {
    redirect("/");
  } else if (!session.user.supplier) {
    redirect("/client");
  }

  return (
    <div className="bg-gray-200 container-grid h-screen">
      <Navbar session={session} />
      <div className="px-4 py-6 overflow-scroll">{children}</div>
      <Navigation />
    </div>
  );
}

export default layout;
