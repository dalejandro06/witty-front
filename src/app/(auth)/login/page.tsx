import Image from "next/image";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import Logo from "@/assets/Logo.svg";
import RecoverPasswordModal from "@/app/modules/login/RecoverPasswordModal";
import FooterLogin from "@/app/modules/login/FooterLogin";
import InputPassword from "@/components/InputPassword";
import { signIn } from "@/auth";

async function Login() {
  return (
    <>
      <div className="pt-10 pb-20 px-6">
        <div className="flex flex-col my-10 items-center">
          <div>
            <Link href="/">
              <Image alt="Witty Logo" src={Logo} />
            </Link>
          </div>
          <p className="text-secondary-blue dark:text-white text-xl font-bold text-center mt-5">
            ¡De vuelta en Witty! Disfruta y agenda tus servicios favoritos.
          </p>
        </div>
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
        <div className="border-1 border-default-200 mt-10" />
        <RecoverPasswordModal />
      </div>
      <FooterLogin isLogin />
    </>
  );
}

export default Login;
