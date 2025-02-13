"use client";
import { Avatar, Card, CardHeader } from "@heroui/react";
import FeatherIcon from "feather-icons-react";
import { Key } from "react";
import { useRouter } from "next/navigation";

import DropdownMenuDots from "./DropdownMenuDots";

import { deleteSupplierLocation } from "@/repositories/ApiRepository";
import { SupplierLocation } from "@/types/ApiTypes";

type Props = {
  location: SupplierLocation;
  isDisabled: boolean;
  isPrincipal?: boolean;
  isSelected?: boolean;
  onSelect?: () => void;
};
function LocationCard({
  isPrincipal,
  location,
  isDisabled,
  onSelect,
  isSelected,
}: Props) {
  const router = useRouter();
  const handleAction = async (key: Key) => {
    switch (key) {
      case "delete":
        await deleteSupplierLocation(location.id);
        break;
      case "edit":
        router.push(`/location/edit-location/${location.id}`);
        break;

      default:
        break;
    }
    router.refresh();
  };

  return (
    <Card
      classNames={{
        base: `${isSelected ? "bg-secondary" : "bg-gray-200"} w-full ${isDisabled && "grayscale"} ${onSelect && "shadow-[0px_20px_20px_0px_rgb(0_0_0/0.05)]"}`,
      }}
      isPressable={Boolean(onSelect)}
      shadow={onSelect ? "sm" : "none"}
      onPress={onSelect}
    >
      <CardHeader className="justify-between">
        <div className="flex gap-5 items-center">
          <Avatar
            classNames={{
              base: isSelected ? "bg-black" : "bg-secondary",
            }}
            icon={
              <FeatherIcon
                className={isSelected ? "text-secondary" : "text-black"}
                icon="map-pin"
              />
            }
            radius="md"
            size="lg"
          />
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold text-black">
              {location.city.name}
            </h4>
            <h5
              className={`text-small ${isSelected ? "text-black" : "text-default-400"}`}
            >
              {location.state.name}
            </h5>
            {isPrincipal && !onSelect && (
              <div className="flex gap-2 items-center">
                <div className="w-[8px] h-[8px] block bg-secondary rounded-full" />
                <p className="text-small text-default-500">Principal</p>
              </div>
            )}
          </div>
        </div>
        {onSelect ? (
          isSelected && <FeatherIcon icon="check" />
        ) : (
          <DropdownMenuDots
            handleAction={handleAction}
            items={[
              { key: "edit", text: "Editar" },
              { key: "delete", text: "Eliminar", color: "danger" },
            ]}
          />
        )}
      </CardHeader>
    </Card>
  );
}

export default LocationCard;
