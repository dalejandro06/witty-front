import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/react";
import FeatherIcon from "feather-icons-react";

type Props = {
  index: number;
  completed: boolean;
  title: string;
  description: string;
  link: string;
};

function ProgressStepper({
  index,
  completed,
  title,
  description,
  link,
}: Props) {
  return (
    <Button
      as={Link}
      className="border-0 p-3 bg-transparent flex justify-start whitespace-normal h-auto"
      endContent={
        completed ? (
          <FeatherIcon
            className="text-secondary-500"
            icon="check-circle"
            size={20}
          />
        ) : (
          <FeatherIcon
            className="text-secondary-500"
            icon="external-link"
            size={20}
          />
        )
      }
      href={link}
    >
      <div className="flex items-center w-full gap-4">
        <div
          className={`${completed ? "bg-secondary text-black" : "text-secondary"} rounded-full min-w-[40px] min-h-[40px] grid place-items-center border-1 border-secondary stepper-line-content`}
        >
          {index}
        </div>
        <div className="text-sm text-start">
          <p className="font-medium">{title}</p>
          <p className="text-gray-500">{description}</p>
        </div>
      </div>
    </Button>
  );
}

export default ProgressStepper;
