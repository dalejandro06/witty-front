import FeatherIcon from "feather-icons-react";
import { Button } from "@nextui-org/react";

import CalendarServicesCard from "@/components/CalendarServicesCard";
import DateItem from "@/modules/calendar/DateItem";

function CalendarSupplier() {
  return (
    <div className="grid gap-3">
      <div className="flex w-full justify-between items-center bg-white p-3 rounded-xl">
        <Button
          isIconOnly
          className="text-black w-14 h-14"
          color="secondary"
          size="lg"
          startContent={<FeatherIcon icon="chevron-left" size={25} />}
        />
        <p className="font-bold text-2xl">Septiembre</p>
        <Button
          isIconOnly
          className="text-black w-14 h-14"
          color="secondary"
          size="lg"
          startContent={<FeatherIcon icon="chevron-right" size={25} />}
        />
      </div>
      <div className="flex justify-between">
        <DateItem isSelected />
        <DateItem />
        <DateItem />
        <DateItem />
        <DateItem />
        <DateItem />
        <DateItem />
      </div>
      <CalendarServicesCard />
    </div>
  );
}

export default CalendarSupplier;
