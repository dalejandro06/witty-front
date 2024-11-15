import { Button } from "@nextui-org/react";

import Dot from "@/components/Dot";

type Props = {
  isSelected?: boolean;
};

function DateItem({ isSelected }: Props) {
  const selectedClass = isSelected ? "bg-secondary-50" : "bg-transparent";

  return (
    <Button
      className={`flex flex-col min-w-6 w-14 h-auto py-5 ${selectedClass}`}
      // style={{ borderBottom: "6px solid #66CC99" }}
    >
      <p>Lun.</p>
      <span>01</span>
      <Dot />
    </Button>
  );
}

export default DateItem;
