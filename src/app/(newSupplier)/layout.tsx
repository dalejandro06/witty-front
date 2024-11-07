import { PropsWithChildren } from "react";

import { auth } from "@/auth";
import Navbar from "@/components/navbar";

async function layout({ children }: PropsWithChildren) {
  const session = await auth();

  return (
    <section className="bg-gray-200 landing-supplier-grid h-dvh">
      <Navbar session={session} />
      <div className="overflow-scroll">{children}</div>
    </section>
  );
}

export default layout;
