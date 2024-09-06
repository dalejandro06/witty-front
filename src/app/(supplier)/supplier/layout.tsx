import { PropsWithChildren } from "react";
import { redirect } from "next/navigation";

import Navbar from "@/components/navbar";
import { auth } from "@/auth";
import Navigation from "@/components/Navigation";

async function layout({ children }: PropsWithChildren) {
  const session = await auth();

  if (session === null) {
    redirect("/login");
  }

  return (
    <div className="bg-gray-200 min-h-screen pb-28">
      <Navbar />
      <div className="my-10 mx-6">{children}</div>
      <Navigation />
    </div>
  );
}

export default layout;
