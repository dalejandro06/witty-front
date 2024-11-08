"use client";
import { Tab, Tabs } from "@nextui-org/react";
import { useState } from "react";

import TitleInfo from "@/components/TitleInfo";
import CreateServiceForm from "@/app/modules/services/CreateServiceForm";

function CreateService() {
  const [firstStepCompleted] = useState(false);

  return (
    <Tabs
      className="block"
      classNames={{
        tab: "py-6",
      }}
      color="secondary"
      size="lg"
    >
      <Tab key="serviceInfo" title="Configurar servicio">
        <article className="grid gap-5">
          <TitleInfo
            infoText="Aquí podrás crear tus servicios. Completa los detalles necesarios para ofrecer tus servicios a los clientes y destacar en las áreas que selecciones."
            title="Crea un servicio"
          />
          <CreateServiceForm />
        </article>
      </Tab>
      <Tab
        key="location"
        isDisabled={!firstStepCompleted}
        title="Asociar ubicación"
      >
        <article className="grid gap-5">
          <TitleInfo
            infoText="Selecciona las ubicaciones donde el servicio estará disponible. Ten en cuenta que, según la ubicación, deberás desplazarte a la locación del cliente o el cliente se desplazará a la tuya."
            title="Elije una ubicación"
          />
          <CreateServiceForm />
        </article>
      </Tab>
    </Tabs>
  );
}

export default CreateService;
