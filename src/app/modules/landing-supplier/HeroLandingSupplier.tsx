import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import React from "react";

function HeroLandingSupplier() {
  return (
    <section className="bg-primary-blue flex flex-col px-10 py-6 gap-4 w-100">
      <div className="text-white">
        <div className="font-bold text-4xl text-center">
          <span className="block text-linear-gradient">PROVEEDOR</span>
          <span>¿QUÉ ES?</span>
        </div>
        <p className="text-center font-light py-5">
          En <strong>Witty</strong>, creemos que nuestros proveedores son la
          base de nuestro éxito. Te invitamos a compartir tus{" "}
          <strong>habilidades y servicios</strong> en nuestra plataforma para
          conectar con nuevos clientes y hacer crecer tu negocio.
        </p>
      </div>
      <div className="text-center">
        <Button
          as={Link}
          className="text-black font-bold w-full p-7"
          color="secondary"
          href="/register-supplier"
        >
          Únete hoy
        </Button>
      </div>
    </section>
  );
}

export default HeroLandingSupplier;
