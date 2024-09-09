import { Chip } from "@nextui-org/react";
import FeatherIcon from "feather-icons-react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ReactNode } from "react";

import { FeatureItemCheckList } from "./FeatureData";

type Props = {
  title: ReactNode;
  checkList: FeatureItemCheckList[];
  imageBanner: StaticImport;
};

function FeatureCardItem({ imageBanner, title, checkList }: Props) {
  return (
    <div className="border-b-1 border-gray-200">
      <div className="flex justify-center gap-4">
        <p className="text-xl font-semibold pb-6">{title}</p>
        <Chip color="secondary">
          <FeatherIcon className="text-black" icon="calendar" size={15} />
        </Chip>
      </div>
      <ul>
        {checkList.map((item) => (
          <li key={item.description} className="flex gap-1 my-2">
            <FeatherIcon
              className="text-secondary pt-1"
              icon="check-circle"
              size={20}
            />
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <Image alt="banner" src={imageBanner} />
      </div>
    </div>
  );
}

export default FeatureCardItem;
