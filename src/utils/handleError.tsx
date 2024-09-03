import toast from "react-hot-toast";

export const useErrorHandler = () => {
  const errorHandler = ({
    title = "Hubo un error",
    description = "Inténtalo más tarde",
  }: {
    title?: string;
    description?: string;
  }) =>
    toast.error((t) => (
      <div className="w-full flex gap-4 items-center justify-between">
        <div className="">
          <p className="font-bold">{title}</p>
          <p className="font-light text-sm">{description}</p>
        </div>
        <button onClick={() => toast.dismiss(t.id)}>X</button>
      </div>
    ));

  return errorHandler;
};
