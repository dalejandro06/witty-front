import { PropsWithChildren } from "react";

import Navbar from "@/components/navbar";
import Navigation from "@/components/Navigation";
import { auth } from "@/auth";

async function layout({ children }: PropsWithChildren) {
  const session = await auth();

  // if (!session || !session.user) {
  //   redirect("/");
  // }

  return (
    <div className="bg-gray-200 min-h-screen pb-28">
      <Navbar session={session} />
      {children}
      <Navigation />
    </div>
  );
}

export default layout;
