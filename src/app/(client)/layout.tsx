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
    <section className="bg-gray-200 container-grid h-dvh">
      <Navbar session={session} />
      <div className="px-4 py-6 overflow-scroll">{children}</div>
      <Navigation />
    </section>
  );
}

export default layout;
