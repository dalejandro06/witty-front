"use client";
import { Card, CardBody } from "@nextui-org/react";
import FeatherIcon from "feather-icons-react";
import { useRouter } from "next/navigation";

type Props = {
  link: string;
  title: string;
  infoText: string;
};

function LinkProfileCard({ link, title, infoText }: Props) {
  const router = useRouter();
  const handlePress = () => {
    router.push(link);
  };

  return (
    <Card
      isPressable
      classNames={{
        body: "px-6",
      }}
      onPress={handlePress}
    >
      <CardBody className="grid grid-cols-8 items-center">
        <div className="col-span-7">
          <p className="font-semibold text-xl">{title}</p>
          <p className="text-gray-500">{infoText}</p>
        </div>
        <FeatherIcon
          className="text-secondary justify-self-end"
          icon="external-link"
        />
      </CardBody>
    </Card>
  );
}

export default LinkProfileCard;
