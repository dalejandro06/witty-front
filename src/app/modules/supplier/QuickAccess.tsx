import QuickAction from "@/components/QuickAction";
import SectionTitle from "@/components/SectionTitle";
import { QuickActionData } from "@/types";

type Props = {
  actions: QuickActionData[];
};

function QuickAccess({ actions }: Props) {
  return (
    <div className="my-10">
      <SectionTitle title="Accesos rápidos" />
      <div className="flex justify-between mt-5 gap-5">
        {actions.map((item) => (
          <QuickAction
            key={`${item.icon}-${item.text}-${item.type}`}
            icon={item.icon}
            text={item.text}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
}

export default QuickAccess;
