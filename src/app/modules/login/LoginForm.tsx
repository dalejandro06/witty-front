"use client";

import { Button, Input } from "@heroui/react";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import InputPassword from "@/components/InputPassword";
import { loginAction } from "@/actions/loginAction";

function LoginForm() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const onSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const response = await loginAction(formData);

      if (response.error) {
        toast.error(response.error);
      } else {
        router.replace("/");
      }
    });
  };

  return (
    <form action={onSubmit} className="flex flex-col gap-5 my-5">
      <Input
        required
        id="email"
        label="Correo"
        name="email"
        placeholder="wittyapp@example.com"
        type="email"
        variant="bordered"
      />
      <InputPassword minLength={8} variant="bordered" />
      <Button color="primary" isLoading={isPending} type="submit">
        Ingresa
      </Button>
    </form>
  );
}

export default LoginForm;
