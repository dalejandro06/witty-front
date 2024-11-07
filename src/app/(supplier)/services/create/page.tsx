"use client";
import { Tab, Tabs } from "@nextui-org/react";

import TitleInfo from "@/components/TitleInfo";
import CreateServiceForm from "@/app/modules/services/CreateServiceForm";

function CreateService() {
  return (
    <Tabs className="block">
      <Tab key="serviceInfo" className="grid gap-5" title="Configurar servicio">
        <TitleInfo
          infoText="Aquí podrás crear tus servicios. Completa los detalles necesarios para ofrecer tus servicios a los clientes y destacar en las áreas que selecciones."
          title="Crea un servicio"
        />
        <CreateServiceForm />
      </Tab>
      <Tab key="location" title="Asociar ubicación">
        <TitleInfo
          infoText="Selecciona las ubicaciones donde el servicio estará disponible. Ten en cuenta que, según la ubicación, deberás desplazarte a la locación del cliente o el cliente se desplazará a la tuya."
          title="Elije una ubicación"
        />
      </Tab>
    </Tabs>
  );
}

export default CreateService;
