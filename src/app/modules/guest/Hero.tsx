"use client";
import React from "react";
import { Button, Link } from "@heroui/react";

import ScrambleWord from "./ScrambleWord";

import { LogoImage } from "@/components/icons";

function Hero() {
  return (
    <section className="bg-primary-blue flex flex-col px-6 py-6 gap-4 w-100">
      <div className="text-white">
        <div className="font-bold text-3xl text-center">
          <ScrambleWord />
          <span>TUS SERVICIOS EN WITTY</span>
        </div>
        <p className="text-center font-light py-5">
          Tu plataforma confiable para encontrar,{" "}
          <strong>ofertar y reservar servicios</strong>
          de calidad a tu alrededor. Conéctate con proveedores o se uno de ellos
          y disfruta de una experiencia sin complicaciones. ¡Empieza ahora y
          simplifica tu vida <strong>gratis!</strong>
        </p>
      </div>
      <div className="text-center">
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
  );
}

export default Hero;
