"use client";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";
import React from "react";

type Props = {
  items: BreadcrumbItem[];
};

export type BreadcrumbItem = {
  text: string;
  href?: string;
};

function WBreadcrumb({ items }: Props) {
  return (
    <div className="flex items-center mb-5">
      {/* <Button isIconOnly className="me-3" color="primary">
        <FeatherIcon icon="chevron-left" />
      </Button> */}
      <Breadcrumbs size="lg" underline="active">
        {items.map((i) => (
          <BreadcrumbItem key={i.text} href={i.href}>
            {i.text}
          </BreadcrumbItem>
        ))}
      </Breadcrumbs>
    </div>
  );
}

export default WBreadcrumb;
