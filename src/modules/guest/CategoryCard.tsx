"use client";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
} from "@nextui-org/react";
import FeatherIcon from "feather-icons-react";

function CategoryCard() {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3 justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-secondary p-2 rounded-xl">
            <FeatherIcon icon="tool" size={15} />
          </div>
          <div className="flex flex-col">
            <p className="text-md">Restauración de computadores</p>
            <p className="text-small text-default-500">Restauracion</p>
          </div>
        </div>
        <div className="bg-base-blue py-1 px-2 rounded-full text-white text-sm">
          +5
        </div>
      </CardHeader>
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
      <CardFooter>
        <Link showAnchorIcon className="text-base-blue" href="/login">
          Conoce todos los servicios
        </Link>
      </CardFooter>
    </Card>
  );
}

export default CategoryCard;
