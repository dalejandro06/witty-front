"use client";
import { Button, Tab, Tabs } from "@nextui-org/react";
import { useState } from "react";

import TitleInfo from "@/components/TitleInfo";
import CreateServiceForm from "@/app/modules/services/CreateServiceForm";
import WBreadcrumb from "@/components/WBreadcrumb";
import RatesServicesForm from "@/app/modules/services/RatesServicesForm";
import RateCard from "@/components/RateCard";
import AddLocationService from "@/app/modules/services/AddLocationService";

function CreateService() {
  const [firstStepCompleted] = useState(true);
  const [rates] = useState([]);
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="grid gap-5">
      <WBreadcrumb
        items={[
          { text: "Servicios", href: "/services" },
          { text: "Nuevo servicio" },
        ]}
      />
      <Tabs
        className="block"
        classNames={{
          tab: "py-6",
          tabContent: "text-wrap",
          base: "overflow-hidden",
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
        <Tab key="serviceRates" title="Personalizar tarifas">
          <article className="grid gap-4">
            <TitleInfo infoText="" title="Personalizar tarifas" />
            <p className="text-primary">Tarifas</p>
            {rates.length > 0 ? (
              <>
                <RateCard />
                <RatesServicesForm
                  setShowForm={setShowForm}
                  showForm={showForm}
                />
              </>
            ) : showForm ? (
              <RatesServicesForm
                setShowForm={setShowForm}
                showForm={showForm}
              />
            ) : (
              <div className="grid items-center text-center border border-dashed border-gray-400 p-10 rounded-lg gap-4">
                <div className="text-gray-500">
                  <p>Aun no has agregado un costo,</p>
                  <p>pulsa el botón para agrega uno.</p>
                </div>
                <Button
                  className="text-black"
                  color="secondary"
                  size="lg"
                  onPress={() => setShowForm(true)}
                >
                  Agregar costo
                </Button>
              </div>
            )}
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
            <AddLocationService />
          </article>
        </Tab>
      </Tabs>
    </div>
  );
}

export default CreateService;
