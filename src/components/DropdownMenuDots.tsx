"use client";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownTrigger,
  DropdownMenu,
} from "@nextui-org/react";
import FeatherIcon from "feather-icons-react";
import React, { Key } from "react";

type Props = {
  handleAction: (key: Key) => void;
  items: ItemMenuDot[];
};

export type ItemMenuDot = {
  key: string;
  text: string;
  color?:
    | "primary"
    | "default"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | undefined;
};

function DropdownMenuDots({ handleAction, items }: Props) {
  // Map text color based on color prop
  const getClassName = (color?: string) => {
    let classNames = [];

    switch (color) {
      case "danger":
        classNames.push("text-danger");
        break;
      default:
        break;
    }

    return classNames;
  };

  return (
    <Dropdown backdrop="blur">
      <DropdownTrigger>
        <Button
          isIconOnly
          className="bg-transparent text-foreground border-default-200"
          color="primary"
          radius="full"
          size="sm"
        >
          <FeatherIcon icon="more-vertical" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Static Actions"
        variant="shadow"
        onAction={handleAction}
      >
        {items.map((item) => (
          <DropdownItem
            key={item.key}
            className={`${getClassName(item.color)}`}
            color={item.color}
          >
            {item.text}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}

export default DropdownMenuDots;
