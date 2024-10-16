import CardAvatar from "@/app/modules/supplier/CardAvatar";
import QuickAccess from "@/app/modules/supplier/QuickAccess";
import { auth } from "@/auth";
import { QuickActionData } from "@/types";
import ScheduledServices from "@/app/modules/client/ScheduledServices";

async function Supplier() {
  const session = await auth();

  const actions: QuickActionData[] = [
    {
      icon: "briefcase",
      text: "Servicios Agendados",
      type: "secondary",
    },
    {
      icon: "settings",
      text: "Gestiona tu perfil",
      type: "secondaryDark",
    },
  ];

  return (
    <div className="py-10 px-6">
      <CardAvatar user={session?.user} />
      <QuickAccess actions={actions} />
      <ScheduledServices />
    </div>
  );
}

export default Supplier;
