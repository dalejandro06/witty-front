import { PropsWithChildren } from "react";
import { redirect } from "next/navigation";

import { auth } from "@/auth";
import Navbar from "@/components/navbar";

async function layout({ children }: PropsWithChildren) {
  const session = await auth();

  if (!session || !session.user) {
    redirect("/");
  }

  return (
    <div>
      <Navbar session={session} />
      {children}
    </div>
  );
}

export default layout;
