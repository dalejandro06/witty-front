import Image from "next/image";

import ColorText from "../modules/welcome/ColorText";
import { welcomeWords } from "../modules/welcome/welcomeData";
import FooterButton from "../modules/welcome/FooterButton";

import Logo from "@/src/assets/logo.png";

export default function Home() {
  return (
    <section className="bg-blue-900 flex flex-col px-6 py-16 gap-4 w-100 h-screen">
      <div className="flex justify-center">
        <Image alt="Witty Logo" src={Logo} />
      </div>
      <div className="my-24 text-4xl text-left">
        {welcomeWords.map((item) => (
          <ColorText key={item} text={item} />
        ))}
      </div>

      <div className="absolute bottom-0 flex w-full left-0">
        <FooterButton link="/login" text="Ingresa" theme="secondaryDark" />
        <FooterButton link="/login" text="Regístrate" theme="secondary" />
      </div>
    </section>
  );
}
