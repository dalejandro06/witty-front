import { Divider } from "@heroui/react";

type Props = {
  title: string;
  infoText?: string;
};

function TitleInfo({ title, infoText }: Props) {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-5">{title}</h1>
      {infoText && (
        <div className="flex items-center">
          <Divider className="w-[3px] h-[60px] me-3" orientation="vertical" />
          <p className="text-gray-500">{infoText}</p>
        </div>
      )}
    </div>
  );
}

export default TitleInfo;
