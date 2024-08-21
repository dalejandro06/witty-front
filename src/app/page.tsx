"use client";
import { Button } from "@nextui-org/button";
import FeatherIcon from "feather-icons-react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Chip,
  Divider,
  Link,
} from "@nextui-org/react";

import { LogoImage, TextLogo } from "../components/icons";

import Navbar from "@/src/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="bg-primary-blue flex flex-col px-6 gap-4 w-100">
        <div className="text-white pt-10">
          <p className="font-bold text-3xl">
            <span className="text-linear-gradient">BUSCA</span> TUS SERVICIOS EN{" "}
            <TextLogo size={90} />
          </p>
          <p className="text-center font-light py-5">
            Tu plataforma confiable para encontrar,{" "}
            <strong>ofertar y reservar servicios</strong>
            de calidad a tu alrededor. Conéctate con proveedores o se uno de
            ellos y disfruta de una experiencia sin complicaciones. ¡Empieza
            ahora y simplifica tu vida <strong>gratis!</strong>
          </p>
        </div>
        <div className="text-center relative top-5">
          <Button
            className="text-black font-bold w-9/12 p-7"
            color="secondary"
            startContent={<LogoImage fill="black" size={17} />}
          >
            Accede
          </Button>
        </div>
      </section>
      <section className="bg-white">
        <div className="bg-gray-200 pt-10 px-6">
          <p className="text-lg font-semibold">Categorías</p>
          <div className="overflow-x-scroll my-5 bg">
            <div className="flex gap-3">
              {/* El servicio me trae starContent y color */}
              <Chip
                className="p-4"
                color="secondary"
                startContent={<FeatherIcon icon="tool" size={15} />}
                variant="flat"
              >
                Categoria
              </Chip>
              <Chip
                className="p-4"
                startContent={<FeatherIcon icon="tool" size={15} />}
                variant="bordered"
              >
                Categoria
              </Chip>
              <Chip
                className="p-4"
                startContent={<FeatherIcon icon="tool" size={15} />}
                variant="bordered"
              >
                Categoria
              </Chip>
              <Chip
                className="p-4"
                startContent={<FeatherIcon icon="tool" size={15} />}
                variant="bordered"
              >
                Categoria
              </Chip>
              <Chip
                className="p-4"
                startContent={<FeatherIcon icon="tool" size={15} />}
                variant="bordered"
              >
                Categoria
              </Chip>
            </div>
          </div>
          <Divider className="my-5" />
        </div>
        <div className="pt-10 px-6">
          <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
              <div className="bg-secondary p-2 rounded-xl">
                <FeatherIcon icon="tool" size={15} />
              </div>
              <div className="flex flex-col">
                <p className="text-md">Restauración de computadores</p>
                <p className="text-small text-default-500">Restauracion</p>
              </div>
            </CardHeader>
            <CardBody>
              <p>
                Make beautiful websites regardless of your design experience.
              </p>
            </CardBody>
            <CardFooter>
              <Link showAnchorIcon href="/login">
                Conoce todos los servicios
              </Link>
            </CardFooter>
          </Card>
        </div>
      </section>
    </>
  );
}
