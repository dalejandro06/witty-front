import { PropsWithChildren } from "react";

import Navbar from "@/components/navbar";

async function layout({ children }: PropsWithChildren) {
  return (
    <div className="bg-gray-200 min-h-screen">
      <Navbar />
      <div className="my-10 mx-6">{children}</div>
    </div>
  );
}

export default layout;
