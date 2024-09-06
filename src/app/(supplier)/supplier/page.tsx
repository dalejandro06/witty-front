import CardAvatar from "@/app/modules/supplier/CardAvatar";
import QuickAccess from "@/app/modules/supplier/QuickAccess";
import Summary from "@/app/modules/supplier/Summary";
import { auth } from "@/auth";

async function Supplier() {
  const session = await auth();

  return (
    <div>
      <CardAvatar user={session?.user} />
      <QuickAccess />
      <Summary />
    </div>
  );
}

export default Supplier;
