import React from "react";

import { TagFree } from "@/components/icons";

function FooterGuest() {
  return (
    <footer className="bg-blue-900 p-3 flex gap-2 items-center px-6 fixed bottom-0 w-full z-40">
      <p className="text-white text-sm underline">
        Busca, agenda y vende tus servicios ahora! 🚀
      </p>
      <TagFree className="absolute right-5 bottom-0" size={50} />
    </footer>
  );
}

export default FooterGuest;
