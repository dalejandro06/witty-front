import { Button, Link } from "@heroui/react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

type Props = {
  image: StaticImport;
  title: string;
  subtitle: string;
  actionButton?: { href: string; text: string };
};

function EmptyStateLayout({ image, title, subtitle, actionButton }: Props) {
  return (
    <div className="grid place-items-center gap-6 mt-20">
      <Image alt="Not locations banner" height={150} src={image} width={150} />
      <div className="text-center">
        <p>{title}</p>
        <p>{subtitle}</p>
      </div>
      {actionButton?.href && (
        <Button
          showAnchorIcon
          as={Link}
          className="bg-gray-100 text-black"
          href={actionButton.href}
          size="lg"
        >
          {actionButton.text}
        </Button>
      )}
    </div>
  );
}

export default EmptyStateLayout;
