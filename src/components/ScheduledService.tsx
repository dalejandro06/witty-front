import { Avatar, Card, CardBody } from "@nextui-org/react";
import FeatherIcon from "feather-icons-react";

import { ServiceInfo } from "@/types";

type Props = {
  service: ServiceInfo;
};

function ScheduledService({ service }: Props) {
  return (
    <Card isHoverable isPressable className="relative">
      <CardBody className="flex flex-row justify-between">
        <div className="flex items-center gap-3">
          <Avatar
            classNames={{
              base: "bg-orange-700",
            }}
            icon={<FeatherIcon icon={service.icon} size={18} />}
            radius="md"
            size="md"
          />
          <div>
            <p>{service.title}</p>
            <p className="text-gray-500 text-small">{service.supplierName}</p>
            <div className="flex gap-2 items-center">
              {service.location && (
                <>
                  <FeatherIcon icon="map-pin" size={13} />
                  <p className="text-gray-500 text-small">{service.location}</p>
                </>
              )}
            </div>
          </div>
        </div>
        <div className="text-right text-xl font-bold pr-6">
          <p>{service.date}</p>
          <p>2:30PM</p>
        </div>
        <div className="absolute right-0 top-0 w-[30px] h-[30px] grid place-items-center bg-secondary rounded-bl-lg">
          <div className="bg-primary-≤">
            <FeatherIcon icon="external-link" size={14} />
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default ScheduledService;
