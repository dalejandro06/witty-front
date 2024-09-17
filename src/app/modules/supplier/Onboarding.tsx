"use client";
import { Accordion, AccordionItem, Progress } from "@nextui-org/react";
import Image from "next/image";

import ProgressStepper from "@/components/ProgressStepper";
import StarsImage from "@/assets/stars.png";
import MedalImage from "@/assets/medal.png";

function Onboarding() {
  const AccordionTitle = () => (
    <div>
      <Progress
        classNames={{
          track: "",
          indicator: "bg-secondary",
          label: "font-medium text-default-600",
          value: "text-foreground/60",
        }}
        label="Progreso"
        showValueLabel={true}
        value={60}
      />
    </div>
  );

  return (
    <div className="my-10 grid gap-5">
      <div>
        <h3 className="text-2xl font-bold">Completa tu perfil</h3>
        <p className="text-sm mt-2">
          Para asegurarte de que tu perfil sea completo y atractivo, sigue estos
          pasos clave para comenzar a aprender en <strong>Witty.</strong>
        </p>
      </div>
      <div className="bg-gradient-to-r from-secondary-500 to-secondary-blue rounded-lg shadow-sm grid absolute-from-grid">
        <div className="clip-rounded">
          <Image alt="stars" className="w-full h-full" src={StarsImage} />
        </div>
        <div className="relative rounded grid place-items-center mt-10 bg-white rounded-t-[-100px]">
          <Image alt="Medal" height={100} src={MedalImage} width={100} />
          <div className="text-center">
            <p className="font-medium text-xl">Felicidades</p>
            <p className="text-gray-500">Tu perfil esta completo</p>
          </div>
        </div>
      </div>

      <Accordion defaultExpandedKeys={["1"]} variant="shadow">
        <AccordionItem
          key="1"
          aria-label="Progreso"
          className="mb-4"
          title={<AccordionTitle />}
        >
          <div className="grid gap-4">
            <ProgressStepper
              completed={true}
              description="Genera confianza a los usuarios y ten una identidad única en Witty"
              index={1}
              title="Agrega una foto de tu negocio"
            />
            <ProgressStepper
              completed={false}
              description="Genera confianza a los usuarios y ten una identidad única en Witty"
              index={2}
              title="Agrega una foto de tu negocio"
            />
            <ProgressStepper
              completed={false}
              description="Genera confianza a los usuarios y ten una identidad única en Witty"
              index={3}
              title="Agrega una foto de tu negocio"
            />
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Onboarding;
