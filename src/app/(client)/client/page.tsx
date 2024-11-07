import CardAvatar from "@/app/modules/supplier/CardAvatar";
import QuickAccess from "@/app/modules/supplier/QuickAccess";
import { auth } from "@/auth";
import { QuickActionData } from "@/types";
import ScheduledServices from "@/app/modules/client/ScheduledServices";
import SupplierBanner from "@/app/modules/client/SupplierBanner";

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
    <div className="grid gap-5">
      <CardAvatar user={session?.user} />
      <QuickAccess actions={actions} />
      <ScheduledServices />
      <SupplierBanner />
    </div>
  );
}

export default Supplier;
