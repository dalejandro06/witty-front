"use client";
import { Input } from "@nextui-org/input";
import { Button, Checkbox } from "@nextui-org/react";
import React, { useState } from "react";

import InputPassword from "@/src/components/InputPassword";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form className="flex flex-col gap-5 my-5">
      <Input
        required
        label="Correo"
        placeholder="Correo"
        type="email"
        value={email}
        variant="bordered"
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputPassword setValue={setPassword} value={password} />
      <div>
        <Checkbox defaultSelected className="mb-5">
          Recordar tu contraseña
        </Checkbox>
      </div>
      <Button color="primary" type="submit">
        Ingresa
      </Button>
    </form>
  );
}

export default LoginForm;
