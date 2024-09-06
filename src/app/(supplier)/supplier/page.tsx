import CardAvatar from "@/app/modules/supplier/CardAvatar";
import QuickAccess from "@/app/modules/supplier/QuickAccess";
import { auth } from "@/auth";

async function Supplier() {
  const session = await auth();

  return (
    <div>
      <CardAvatar user={session?.user} />
      <QuickAccess />
    </div>
  );
}

export default Supplier;
