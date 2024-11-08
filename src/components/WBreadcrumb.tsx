"use client";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
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
    <Breadcrumbs size="lg" underline="active">
      {items.map((i) => (
        <BreadcrumbItem key={i.text} href={i.href}>
          {i.text}
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
}

export default WBreadcrumb;
