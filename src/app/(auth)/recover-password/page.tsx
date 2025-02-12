"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { useTransition } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";

import Logo from "@/assets/Logo.svg";
import FooterLogin from "@/app/modules/login/FooterLogin";
import InputPassword from "@/components/InputPassword";
import { recoverPasswordAction } from "@/actions/loginAction";

function RecoverPassword() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const searchParams = useSearchParams();

  const onSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const token = searchParams.get("token");

      if (token) {
        const response = await recoverPasswordAction(formData, token);

        if (response.error) {
          toast.error("Error");
        } else {
          toast.success("¡Tu contraseña se actualizó correctamente!");
          router.replace("/login");
        }
      }
    });
  };

  return (
    <>
      <div className="pt-10 pb-20 px-6">
        <div className="flex flex-col my-10 items-center">
          <div>
            <Link href="/">
              <Image alt="Witty Logo" src={Logo} />
            </Link>
          </div>
          <p className="text-secondary-blue dark:text-white text-xl text-center mt-5">
            ¡De vuelta en Witty! Disfruta y agenda tus servicios favoritos.
          </p>
        </div>
        <form action={onSubmit} className="flex flex-col gap-5 my-5">
          <InputPassword label="Ingresa tu nueva contraseña" minLength={8} />
          <Button color="primary" isLoading={isPending} type="submit">
            Ingresa
          </Button>
        </form>
      </div>
      <FooterLogin isLogin />
    </>
  );
}

export default RecoverPassword;
