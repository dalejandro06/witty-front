import { PropsWithChildren } from "react";

import { auth } from "@/auth";
import Navbar from "@/components/navbar";
import Navigation from "@/components/Navigation";

async function layout({ children }: PropsWithChildren) {
  const session = await auth();

  return (
    <div className="bg-gray-200 min-h-screen pb-20">
      <Navbar session={session} />
      <div className="px-4">{children}</div>
      <Navigation />
    </div>
  );
}

export default layout;
