import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
} from "@nextui-org/react";

function CalendarServicesCard() {
  return (
    <Card className="px-2">
      <CardHeader className="flex justify-between gap-3">
        <div className="flex items-center gap-3">
          <Avatar
            alt="nextui logo"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          />
          <p className="text-md">Camila P</p>
        </div>
        <p className="text-secondary font-bold text-xl">2:30 PM</p>
      </CardHeader>
      <Divider />
      <CardBody>
        <div className="flex gap-3 justify-between">
          <div>
            <p className="font-semibold">Corte cabello</p>
            <span className="text-small text-gray-500">Belleza</span>
          </div>
          <div>
            <p className="font-semibold">Ubicación</p>
            <span className="text-small text-gray-500">
              El cliente te visita
            </span>
          </div>
          <div>
            <p className="font-semibold">Contacto</p>
            <span className="text-small text-gray-500">3001223311</span>
          </div>
        </div>
      </CardBody>
      <CardFooter className="justify-between">
        <div className="grid gap-2">
          <p>Tarifas contratadas</p>
          <Chip
            radius="sm"
            startContent={
              <div className="w-[10px] h-[10px] rounded-full bg-secondary" />
            }
            variant="bordered"
          >
            Corte caballero: <strong>$20.000 COP</strong>
          </Chip>
        </div>
        <div className="grid gap-2">
          <p>Valor estimado</p>
          <p className="text-secondary text-xl">$60.000</p>
        </div>
      </CardFooter>
    </Card>
  );
}

export default CalendarServicesCard;
