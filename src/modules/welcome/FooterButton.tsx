import Link from "next/link";
import React from "react";

type Props = {
  text: string;
  theme: "primary" | "secondary" | "secondaryDark";
  link: string;
};

function FooterButton({ text, theme, link }: Props) {
  const background = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    secondaryDark: "bg-blue-900",
  };

  const bgColor = background[theme];

  return (
    <button className={`text-white w-full p-4 rounded-t-large ${bgColor}`}>
      <Link href={link}>{text}</Link>
    </button>
  );
}

export default FooterButton;
