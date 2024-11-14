import Image from "next/image";
import { redirect } from "next/navigation";

import { welcomeWords } from "@/app/modules/welcome/welcomeData";
import ColorText from "@/app/modules/welcome/ColorText";
import Logo from "@/assets/Logo.svg";
import FooterButton from "@/app/modules/welcome/FooterButton";
import { auth } from "@/auth";

export default async function welcome() {
  const session = await auth();

  if (session) {
    const redirectTo = session.user.supplier?.id ? "/supplier" : "/client";

    redirect(redirectTo);
  }

  return (
    <section className="bg-blue-900 flex flex-col px-6 pt-16 gap-4 w-100 relative h-screen">
      <div className="flex justify-center">
        <Image alt="Witty Logo" src={Logo} />
      </div>
      <div className="my-10 text-4xl text-left">
        {welcomeWords.map((item) => (
          <ColorText key={item} text={item} />
        ))}
      </div>

      <div className="absolute bottom-0 flex w-full left-0 pt-20">
        <FooterButton link="/login" text="Ingresa" theme="secondaryDark" />
        <FooterButton
          link="/create-account"
          text="Regístrate"
          theme="secondary"
        />
      </div>
    </section>
  );
}
