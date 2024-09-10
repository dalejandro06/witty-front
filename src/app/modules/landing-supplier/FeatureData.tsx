import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { ReactNode } from "react";

import iPhoneBanner from "@/assets/iphone-banner.png";
import banner2 from "@/assets/banner-2.png";

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
  {
    id: 2,
    title: (
      <span>
        Agrega <strong className="text-secondary">ubicaciones</strong>{" "}
        operativas
      </span>
    ),
    image: banner2,
    checkList: [
      {
        description: "Mira todas las ubicaciones en las que vas a operar",
      },
      {
        description: "Edita y elimina las ubicaciones",
      },
      {
        description:
          "Identifica cuantos servicios tienes agregadas a tus ubicaciones",
      },
      {
        description: "Observa en el mapa las zonas en las que has trabajado",
      },
    ],
  },
  {
    id: 3,
    title: (
      <span>
        Crea <strong className="text-secondary">servicios</strong> para ofrecer
      </span>
    ),
    image: iPhoneBanner,
    checkList: [
      {
        description:
          "Selecciona las principales ciudades en la que vas a trabajar",
      },
      {
        description:
          "Agrega titulo, duración y descripción al servicio que vas a ofrecer",
      },
      {
        description: "Añade imágenes del servicio para llamar la atención",
      },
      {
        description:
          "Agrega información opcional como valores, costos extras, lugar de operación y otros",
      },
      {
        description: "Gestiona si quieres que se publique automáticamente",
      },
    ],
  },
  {
    id: 4,
    title: (
      <span>
        <strong className="text-secondary">Gestiona</strong> tu calendario
      </span>
    ),
    image: iPhoneBanner,
    checkList: [
      {
        description:
          "Configura tu calendario con los días y horas que tendrás disponibilidad",
      },
      {
        description:
          "Mira la disponibilidad que tienes en el calendario general",
      },
      {
        description:
          "Bloquea los días que tengas cosas por hacer y no puedes ser agendado",
      },
      {
        description:
          "Invita a usuarios fuera de la aplicación para recordar que tienen compromisos.",
      },
    ],
  },
  {
    id: 5,
    title: (
      <span>
        <strong className="text-secondary">Acepta</strong> servicios
      </span>
    ),
    image: iPhoneBanner,
    checkList: [
      {
        description:
          "Mira las solicitudes que te han llegado sobre tus servicios",
      },
      {
        description:
          "Acepta y rechaza con el detalle de las personas que te han ofrecido servicios",
      },
      {
        description:
          "Obtén información extra del usuario, lugar del servicio y otros cuando es solicitado",
      },
      {
        description: "Notifica al usuario sobre el estado de su servicio",
      },
      {
        description: "Obtén datos para poder comunicarte con tu cliente.",
      },
    ],
  },
];
