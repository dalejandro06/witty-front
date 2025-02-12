"use client";
import { Input, InputProps } from "@nextui-org/react";
import { useState } from "react";

import { EyeFilledIcon, EyeSlashFilledIcon } from "./icons";

function InputPassword(props: InputProps) {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
    <Input
      className="text-secondary-blue"
      classNames={{
        inputWrapper: "bg-default-100",
      }}
      description={props.description || "Minimo 8 caracteres"}
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
      id={props.id || "password"}
      isRequired={props.isRequired || true}
      label={props.label || "Contraseña"}
      name={props.name || "password"}
      placeholder={props.placeholder || "Ingresa tu contraseña"}
      required={props.required || true}
      type={isVisible ? "text" : "password"}
      variant={props.variant || "flat"}
      {...props}
    />
  );
}

export default InputPassword;
