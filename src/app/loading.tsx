"use client";

import { Progress } from "@nextui-org/react";

function loading() {
  return (
    <div className="h-screen w-screen bg-blue-800 grid place-items-center">
      <div>
        <Progress
          isIndeterminate
          aria-label="Loading..."
          className="max-w-md"
          size="sm"
        />
        <h1 className="text-3xl text-white">Cargando contenido</h1>
      </div>
    </div>
  );
}

export default loading;
