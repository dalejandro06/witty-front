import { PropsWithChildren } from "react";

import { auth } from "@/auth";
import Navbar from "@/components/navbar";
import Navigation from "@/components/Navigation";

async function layout({ children }: PropsWithChildren) {
  const session = await auth();

  return (
    <div className="bg-gray-200 container-grid">
      <Navbar session={session} />
      <div className="px-4 pb-6 overflow-scroll">{children}</div>
      <Navigation />
    </div>
  );
}

export default layout;
