import { HomeSupplierMetrics } from "@/types/ApiTypes";

export const onboardingSteps = (data: HomeSupplierMetrics) => [
  {
    title: "Agrega una foto a tu perfil",
    description:
      "Genera confianza a los usuarios y ten una identidad única en Witty",
    completed: data.onboarding_completed,
  },
  {
    title: "Agrega una ubicación",
    description:
      "Elige donde quieres ofrecer tus servicios en una gama de departamentos y ciudades",
    completed: data.locations > 0,
  },
  {
    title: "Añade un servicio",
    description: "Lista los servicios que ofrecerás en la plataforma",
    completed: data.services > 0,
  },
];
