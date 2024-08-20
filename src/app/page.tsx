import { Button } from "@nextui-org/button";

import { LogoImage, TextLogo } from "../components/icons";

import Navbar from "@/src/components/Navbar";

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
      <section className="bg-white py-16 px-6">
        <div>
          <p>Categorías</p>
        </div>
      </section>
    </>
  );
}
