import CardAvatar from "@/app/modules/supplier/CardAvatar";
import Onboarding from "@/app/modules/supplier/Onboarding";
import QuickAccess from "@/app/modules/supplier/QuickAccess";
import Summary from "@/app/modules/supplier/Summary";
import { auth } from "@/auth";
import { QuickActionData } from "@/types";

async function Supplier() {
  const session = await auth();
  const actions: QuickActionData[] = [
    {
      icon: "send",
      text: "Invita a un servicio",
      type: "secondary",
    },
    {
      icon: "eye",
      text: "Solicitudes pendientes",
      type: "secondaryDark",
    },
  ];

  return (
    <>
      <CardAvatar user={session?.user} />
      <Onboarding />
      <QuickAccess actions={actions} />
      <Summary />
    </>
  );
}

export default Supplier;
