import Image from "next/image";

import StarsImage from "@/assets/stars.png";
import MedalImage from "@/assets/medal.png";
import { getHomeSupplier } from "@/repositories/ApiRepository";
import OnboardingAccordion from "@/components/OnboardingAccordion";

async function Onboarding() {
  const metrics = await getHomeSupplier();

  return (
    <div className="my-10 grid gap-5">
      <div>
        <h3 className="text-2xl font-bold">Completa tu perfil</h3>
        <p className="text-sm mt-2">
          Para asegurarte de que tu perfil sea completo y atractivo, sigue estos
          pasos clave para comenzar a aprender en <strong>Witty.</strong>
        </p>
      </div>
      {metrics.date_onboarding_completed ? (
        <div className="relative overflow-hidden bg-white rounded-lg shadow-sm grid absolute-from-grid pb-5">
          <div className="relative -top-1/4 overflow-hidden bg-gradient-to-r from-secondary-500 to-secondary-blue clip-rounded">
            <Image alt="stars" className="w-full h-full" src={StarsImage} />
          </div>
          <div className="relative rounded grid place-items-center mt-16">
            <Image alt="Medal" height={85} src={MedalImage} width={85} />
            <div className="text-center">
              <p className="font-medium text-xl">Felicidades</p>
              <p className="text-gray-500">Tu perfil esta completo</p>
            </div>
          </div>
        </div>
      ) : (
        <OnboardingAccordion metrics={metrics} />
      )}
    </div>
  );
}

export default Onboarding;
