import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ReactNode } from "react";

import iPhoneBanner from "@/assets/iphone-banner.png";

export type FeatureItemCheckList = {
  description: string;
};

export type FeatureItem = {
  id: string | number;
  title: ReactNode;
  image: StaticImport;
  checkList: FeatureItemCheckList[];
};

export const featureItems: FeatureItem[] = [
  {
    id: 1,
    title: (
      <span>
        Ten tus <strong className="text-secondary">agendas</strong> a la mano
      </span>
    ),
    image: iPhoneBanner,
    checkList: [
      {
        description:
          "Accesos rápidos para una navegación efectiva en la aplicación",
      },
      {
        description: "Mira el resumen de lo que tienes para esta semana",
      },
      {
        description: "Ten en cuenta la fecha tus próximos servicios",
      },
      {
        description: "Conoce si tienes disponibilidad para el día",
      },
    ],
  },
];
