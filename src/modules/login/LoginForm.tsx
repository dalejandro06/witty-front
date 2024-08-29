"use client";
import { Input } from "@nextui-org/input";
import { Button, Checkbox } from "@nextui-org/react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

import InputPassword from "@/components/InputPassword";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onFinish = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
      });

      if (!res || res.error) {
        // return message.error("Error al iniciar sesion");
      }
      router.replace("/supplier");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-5 my-5" onSubmit={onFinish}>
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
      <Button color="primary" isLoading={loading} type="submit">
        Ingresa
      </Button>
    </form>
  );
}

export default LoginForm;
