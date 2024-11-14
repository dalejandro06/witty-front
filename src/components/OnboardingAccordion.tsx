"use client";

import { Accordion, AccordionItem, Progress } from "@nextui-org/react";

import ProgressStepper from "./ProgressStepper";

import { onboardingSteps } from "@/app/modules/supplier/supplierData";
import { HomeSupplierMetrics } from "@/types/ApiTypes";
import { getOnboardingPercentage } from "@/utils/getOnboardingPercentage";

type Props = {
  metrics: HomeSupplierMetrics;
};

const AccordionTitle = ({ metrics }: Props) => {
  const percentage = getOnboardingPercentage(metrics);

  return (
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
        value={percentage}
      />
    </div>
  );
};

function OnboardingAccordion({ metrics }: Props) {
  return (
    <Accordion defaultExpandedKeys={["1"]} variant="shadow">
      <AccordionItem
        key="1"
        aria-label="Progreso"
        className="mb-4"
        title={<AccordionTitle metrics={metrics} />}
      >
        <div className="grid gap-4">
          {onboardingSteps(metrics).map((item, idx) => (
            <ProgressStepper
              key={item.title}
              completed={item.completed}
              description={item.description}
              index={idx + 1}
              link={item.link}
              title={item.title}
            />
          ))}
        </div>
      </AccordionItem>
    </Accordion>
  );
}

export default OnboardingAccordion;
