"use client";
import { Input } from "@nextui-org/input";
import { useState } from "react";

import { EyeFilledIcon, EyeSlashFilledIcon } from "./icons";

type Props = {
  value: string;
  setValue: (p: string) => void;
};

function InputPassword({ value, setValue }: Props) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      required
      className="text-secondary-blue"
      endContent={
        <button
          aria-label="toggle password visibility"
          className="focus:outline-none"
          type="button"
          onClick={toggleVisibility}
        >
          {isVisible ? (
            <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          ) : (
            <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
          )}
        </button>
      }
      label="Contraseña"
      placeholder="Ingresa tu contraseña"
      type={isVisible ? "text" : "password"}
      value={value}
      variant="bordered"
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default InputPassword;
