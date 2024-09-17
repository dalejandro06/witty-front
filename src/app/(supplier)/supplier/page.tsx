import CardAvatar from "@/app/modules/supplier/CardAvatar";
import Onboarding from "@/app/modules/supplier/Onboarding";
import QuickAccess from "@/app/modules/supplier/QuickAccess";
import Summary from "@/app/modules/supplier/Summary";
import { auth } from "@/auth";

async function Supplier() {
  const session = await auth();

  return (
    <div>
      <CardAvatar user={session?.user} />
      <Onboarding />
      <QuickAccess />
      <Summary />
    </div>
  );
}

export default Supplier;
