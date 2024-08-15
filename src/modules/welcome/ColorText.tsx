import React from "react";

type Props = {
  text: string;
};

function ColorText({ text }: Props) {
  const firstLetter = text.slice(0, 1);
  const rest = text.slice(1, text.length);

  return (
    <div
      className="text-4xl text-white flex font-bold"
      style={{ letterSpacing: "1.3rem" }}
    >
      <p>{firstLetter.toUpperCase()}</p>
      <p className="text-secondary">{rest.toUpperCase()}</p>
    </div>
  );
}

export default ColorText;
