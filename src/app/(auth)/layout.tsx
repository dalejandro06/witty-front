import { PropsWithChildren } from "react";
import { redirect } from "next/navigation";
import { Button, Link } from "@heroui/react";
import FeatherIcon from "feather-icons-react";

import { auth } from "@/auth";

async function layout({ children }: PropsWithChildren) {
  const session = await auth();

  if (session) {
    if (session.user.supplier) {
      redirect("/supplier");
    } else {
      redirect("/client");
    }
  }

  return (
    <div className="mt-6">
      <Button
        as={Link}
        href="/"
        startContent={<FeatherIcon icon="chevron-left" />}
        variant="light"
      >
        Volver
      </Button>
      {children}
    </div>
  );
}

export default layout;
