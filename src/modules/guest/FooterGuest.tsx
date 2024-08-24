import { Button } from "@nextui-org/button";
import React from "react";

function FooterGuest() {
  return (
    <footer className="bg-blue-900 p-3 flex gap-2 justify-evenly items-center fixed bottom-0 w-full z-40">
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
    </footer>
  );
}

export default FooterGuest;
