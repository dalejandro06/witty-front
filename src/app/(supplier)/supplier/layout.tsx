import { PropsWithChildren } from "react";

import Navigation from "@/components/Navigation";

async function layout({ children }: PropsWithChildren) {
  return (
    <div className="bg-gray-200 min-h-screen pb-28">
      {children}
      <Navigation />
    </div>
  );
}

export default layout;
