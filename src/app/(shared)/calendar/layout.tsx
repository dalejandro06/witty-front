"use client";
import FeatherIcon from "feather-icons-react";
import { Button, Tab, Tabs } from "@nextui-org/react";
import { PropsWithChildren } from "react";
import { usePathname } from "next/navigation";

import DateItem from "@/app/modules/calendar/DateItem";

function CalendarSupplier({ children }: PropsWithChildren) {
  const pathname = usePathname();

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
      <div className="overflow-hidden grid gap-3 bg-white p-3 pb-10 rounded-xl">
        <div className="overflow-x-scroll flex justify-between gap-2">
          <DateItem isSelected />
          <DateItem />
          <DateItem />
          <DateItem />
          <DateItem />
          <DateItem />
          <DateItem />
        </div>
        <Tabs
          className="block"
          classNames={{
            tab: "py-6",
            tabContent: "text-wrap text-center",
            base: "overflow-hidden",
          }}
          color="secondary"
          selectedKey={pathname}
          size="lg"
          variant="light"
        >
          <Tab
            key="/calendar"
            href="/calendar"
            id="/calendar"
            title="Servicios agendados"
          />
          <Tab
            key="/calendar/pending-requests"
            href="/calendar/pending-requests"
            id="/calendar/pending-requests"
            title="Solicitudes pendientes"
          />
          <Tab
            key="/calendar/rejected-requests"
            href="/calendar/rejected-requests"
            id="/calendar/rejected-requests"
            title="Servicios cancelados"
          />
        </Tabs>
        {children}
      </div>
    </div>
  );
}

export default CalendarSupplier;
