import Link from "next/link";

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
    <button className={`text-white w-full rounded-t-large ${bgColor}`}>
      <Link className="block h-full w-full p-4" href={link}>
        {text}
      </Link>
    </button>
  );
}

export default FooterButton;
