import { HomeSupplierMetrics } from "@/types/ApiTypes";

export function getOnboardingPercentage(metrics: Partial<HomeSupplierMetrics>) {
  const cloneMetrics = { ...metrics };

  delete cloneMetrics.date_onboarding_completed;
  delete cloneMetrics.onboarding_completed;
  const total = Object.keys(cloneMetrics).length;
  let completedSteps = 0;

  for (const key in cloneMetrics) {
    // @ts-ignore
    if (cloneMetrics[key] > 0 || cloneMetrics[key] === true) {
      completedSteps++;
    }
  }

  return (completedSteps / total) * 100;
}
