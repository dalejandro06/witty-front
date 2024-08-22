import Image from "next/image";

import { welcomeWords } from "@/src/modules/welcome/welcomeData";
import ColorText from "@/src/modules/welcome/ColorText";
import Logo from "@/src/assets/Logo.svg";
import FooterButton from "@/src/modules/welcome/FooterButton";

export default function welcome() {
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
        <FooterButton link="/login" text="Regístrate" theme="secondary" />
      </div>
    </section>
  );
}
