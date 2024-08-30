import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/react";

import InputPassword from "@/components/InputPassword";
import { signIn } from "@/auth";

function LoginForm() {
  return (
    <form
      action={async (formData) => {
        "use server";
        await signIn("credentials", formData);
      }}
      className="flex flex-col gap-5 my-5"
    >
      <Input
        required
        id="email"
        label="Correo"
        name="email"
        placeholder="Correo"
        type="email"
        variant="bordered"
      />
      <InputPassword />
      <Button color="primary" type="submit">
        Ingresa
      </Button>
    </form>
  );
}

export default LoginForm;
