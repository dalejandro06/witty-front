import React from "react";

import { TagFree } from "@/components/icons";

function FooterGuest() {
  return (
    <footer className="bg-blue-900 p-3 flex gap-2 justify-between items-center px-6 fixed bottom-0 w-full h-[70px] z-40">
      <p className="text-white text-sm underline">
        Busca, agenda y vende tus servicios ahora! 🚀
      </p>
      <div className="w-[50px] h-full relative">
        <TagFree className="absolute top-[-20px]" size={70} />
      </div>
    </footer>
  );
}

export default FooterGuest;
