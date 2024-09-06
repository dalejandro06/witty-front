"use client";
import { Input, InputProps } from "@nextui-org/input";
import { useState } from "react";

import { EyeFilledIcon, EyeSlashFilledIcon } from "./icons";

function InputPassword(props: InputProps) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      isRequired
      required
      className="text-secondary-blue"
      description={"Minimo 8 caracteres"}
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
      id="password"
      label="Contraseña"
      minLength={8}
      name="password"
      placeholder="Ingresa tu contraseña"
      type={isVisible ? "text" : "password"}
      variant="bordered"
      {...props}
    />
  );
}

export default InputPassword;
