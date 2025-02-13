import { Button } from "@heroui/react";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { CSSProperties } from "react";

type Props = {
  servicesLength: number;
  date: string;
  image: StaticImport;
  sizeImage: number;
};

function SummaryButton({ servicesLength, date, image, sizeImage }: Props) {
  const getDisabledStyle = (): CSSProperties | undefined => {
    if (servicesLength === 0) {
      return {
        filter: "grayScale(1)",
      };
    }

    return undefined;
  };

  return (
    <Button
      className="h-auto w-full bg-gradient-to-r from-[#66CC99] to-[#FFCC00] rounded-xl p-5 flex justify-around"
      disabled={servicesLength === 0}
      style={getDisabledStyle()}
    >
      <div className="text-center flex flex-col justify-center">
        <p className="text-4xl font-bold">{servicesLength}</p>
        <p className="font-medium max-w-[100px] text-wrap">
          Servicios para {date}
        </p>
      </div>
      <div>
        <Image
          alt="Calendar resume"
          height={sizeImage}
          src={image}
          width={sizeImage}
        />
      </div>
    </Button>
  );
}

export default SummaryButton;
