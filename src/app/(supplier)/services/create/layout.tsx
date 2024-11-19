import { PropsWithChildren } from "react";

import WBreadcrumb from "@/components/WBreadcrumb";
import CreateServiceContextProvider from "@/context/CreateServiceContext";

function layout({ children }: PropsWithChildren) {
  return (
    <div className="grid gap-5">
      <WBreadcrumb
        items={[
          { text: "Servicios", href: "/services" },
          { text: "Nuevo servicio" },
        ]}
      />
      <CreateServiceContextProvider>{children}</CreateServiceContextProvider>
    </div>
  );
}

export default layout;
