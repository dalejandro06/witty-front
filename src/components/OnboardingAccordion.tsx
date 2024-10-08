"use client";

import { Accordion, AccordionItem, Progress } from "@nextui-org/react";

import ProgressStepper from "./ProgressStepper";

import { onboardingSteps } from "@/app/modules/supplier/supplierData";
import { HomeSupplierMetrics } from "@/types/ApiTypes";

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

type Props = {
  metrics: HomeSupplierMetrics;
};

function OnboardingAccordion({ metrics }: Props) {
  return (
    <Accordion defaultExpandedKeys={["1"]} variant="shadow">
      <AccordionItem
        key="1"
        aria-label="Progreso"
        className="mb-4"
        title={<AccordionTitle />}
      >
        <div className="grid gap-4">
          {onboardingSteps(metrics).map((item, idx) => (
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
  );
}

export default OnboardingAccordion;
