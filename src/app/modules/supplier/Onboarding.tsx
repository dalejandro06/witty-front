"use client";
import { Accordion, AccordionItem, Progress, Switch } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";

import { onboardingSteps } from "./supplierData";

import ProgressStepper from "@/components/ProgressStepper";
import StarsImage from "@/assets/stars.png";
import MedalImage from "@/assets/medal.png";

function Onboarding() {
  const [completed, setCompleted] = useState(false);

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
        value={30}
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
      <Switch
        aria-label="Automatic updates"
        size="sm"
        onChange={() => setCompleted(!completed)}
      >
        Completar
      </Switch>

      {completed ? (
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
        <Accordion defaultExpandedKeys={["1"]} variant="shadow">
          <AccordionItem
            key="1"
            aria-label="Progreso"
            className="mb-4"
            title={<AccordionTitle />}
          >
            <div className="grid gap-4">
              {onboardingSteps.map((item, idx) => (
                <ProgressStepper
                  key={item.title}
                  completed={item.completed}
                  description={item.description}
                  index={idx + 1}
                  title={item.title}
                />
              ))}
            </div>
          </AccordionItem>
        </Accordion>
      )}
    </div>
  );
}

export default Onboarding;
