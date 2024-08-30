"use client";
import { Input } from "@nextui-org/input";
import { useState } from "react";

import { EyeFilledIcon, EyeSlashFilledIcon } from "./icons";

function InputPassword() {
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
      id="password"
      label="Contraseña"
      name="password"
      placeholder="Ingresa tu contraseña"
      type={isVisible ? "text" : "password"}
      variant="bordered"
    />
  );
}

export default InputPassword;
