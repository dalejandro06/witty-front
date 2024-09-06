import { Button } from "@nextui-org/button";
import FeatherIcon from "feather-icons-react";
import React from "react";

type Props = {
  icon: string;
  text: string;
  type: "secondary" | "secondaryDark";
};

function QuickAction({ icon, text, type }: Props) {
  const getType = () => {
    if (type === "secondary") {
      return "bg-secondary text-black font-bold";
    }

    if (type === "secondaryDark") {
      return "bg-black text-secondary font-bold";
    }
  };

  return (
    <Button
      className={`${getType()} w-full px-2 py-10 flex gap-1 items-center rounded-lg shadow-lg`}
      color="secondary"
      size="lg"
    >
      <FeatherIcon icon={icon} size={20} />
      <p className="text-sm">{text}</p>
    </Button>
  );
}

export default QuickAction;
