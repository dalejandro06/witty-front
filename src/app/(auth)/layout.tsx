import { PropsWithChildren } from "react";
import { redirect } from "next/navigation";

import { auth } from "@/auth";

async function layout({ children }: PropsWithChildren) {
  const session = await auth();

  if (session && session.user) {
    redirect("/supplier");
  }

  return <div>{children}</div>;
}

export default layout;
