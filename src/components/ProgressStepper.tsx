import FeatherIcon from "feather-icons-react";

type Props = {
  index: number;
  completed: boolean;
  title: string;
  description: string;
};

function ProgressStepper({ index, completed, title, description }: Props) {
  return (
    <div className="flex items-center gap-4">
      <div
        className={`${completed ? "bg-secondary text-black" : "text-secondary"} rounded-full min-w-[40px] min-h-[40px] grid place-items-center border-1 border-secondary stepper-line-content`}
      >
        {index}
      </div>
      <div className="text-sm">
        <p className="font-medium">{title}</p>
        <p className="text-gray-500">{description}</p>
      </div>
      {completed && (
        <FeatherIcon className="text-secondary-500" icon="check-circle" />
      )}
    </div>
  );
}

export default ProgressStepper;
