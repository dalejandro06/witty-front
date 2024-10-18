import { PropsWithChildren } from "react";
import { redirect } from "next/navigation";

import Navbar from "@/components/navbar";
import Navigation from "@/components/Navigation";
import { auth } from "@/auth";

async function layout({ children }: PropsWithChildren) {
  const session = await auth();

  if (!session || !session.user) {
    redirect("/");
  } else if (session.user.supplier) {
    redirect("/supplier");
  }

  return (
    <div className="bg-gray-200 min-h-screen pb-28">
      <Navbar session={session} />
      {children}
      <Navigation />
    </div>
  );
}

export default layout;
