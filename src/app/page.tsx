"use client";
import { Button } from "@nextui-org/button";
import FeatherIcon from "feather-icons-react";
import { Chip, Divider, Link } from "@nextui-org/react";

import { LogoImage } from "../components/icons";
import CategoryCard from "../modules/guest/CategoryCard";

import Navbar from "@/src/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="bg-primary-blue flex flex-col px-6 gap-4 w-100">
        <div className="text-white pt-10">
          <p className="font-bold text-3xl text-center">
            <span className="block text-linear-gradient">BUSCA</span>
            <span>TUS SERVICIOS EN WITTY</span>
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
            as={Link}
            className="text-black font-bold w-9/12 p-7"
            color="secondary"
            href="/welcome"
            startContent={<LogoImage fill="black" size={17} />}
          >
            Accede
          </Button>
        </div>
      </section>
      <section className="bg-white mb-20">
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
        <div className="pt-10 px-6 flex flex-col gap-5">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </section>
      <div className="bg-blue-900 p-3 flex gap-2 justify-evenly items-center fixed bottom-0 w-full z-40">
        <p className="text-white text-small underline">
          Busca, agenda y vende tus servicios ahora! 🚀
        </p>
        <Button
          className="bg-gradient-to-tr from-[#FFCC00] to-[#66CC99] shadow-lg text-black"
          radius="full"
          size="sm"
        >
          Gratis
        </Button>
      </div>
    </>
  );
}
