import React from "react";

import QuickAction from "@/components/QuickAction";
import SectionTitle from "@/components/SectionTitle";

function QuickAccess() {
  return (
    <div className="my-10">
      <SectionTitle title="Accesos rápidos" />
      <div className="flex justify-between mt-5 gap-5">
        <QuickAction icon="send" text="Invita a un servicio" type="secondary" />
        <QuickAction
          icon="eye"
          text="Solicitudes pendientes"
          type="secondaryDark"
        />
      </div>
    </div>
  );
}

export default QuickAccess;
