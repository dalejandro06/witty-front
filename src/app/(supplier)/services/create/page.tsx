"use client";
import { Button, Tab, Tabs, useDisclosure } from "@heroui/react";
import { useContext, useState } from "react";
import FeatherIcon from "feather-icons-react";

import CustomButton from "./CustomButton";

import TitleInfo from "@/components/TitleInfo";
import CreateServiceForm from "@/app/modules/services/CreateServiceForm";
import RatesServicesForm from "@/app/modules/services/RatesServicesForm";
import RateCard from "@/components/RateCard";
import AddLocationService from "@/app/modules/services/AddLocationService";
import { CreateServiceContext } from "@/context/CreateServiceContext";
import { TabsKeys } from "@/types";
import RateModalHelp from "@/app/modules/services/RateModalHelp";

function CreateService() {
  const [selectedTab, setSelectedTab] = useState<TabsKeys>(
    TabsKeys.serviceInfo,
  );
  const [showForm, setShowForm] = useState(false);
  const { basicData, rates } = useContext(CreateServiceContext);
  const { onOpen, isOpen, onOpenChange } = useDisclosure();

  return (
    <div className="relative">
      <Tabs
        className="block"
        classNames={{
          tab: "py-6",
          tabContent: "text-wrap",
          base: "overflow-hidden",
        }}
        color="secondary"
        selectedKey={selectedTab}
        size="lg"
        onSelectionChange={(v) => setSelectedTab(v as keyof typeof Tabs)}
      >
        <Tab key={TabsKeys.serviceInfo} title="Configurar servicio">
          <article className="grid gap-5 pt-6">
            <TitleInfo
              infoText="Aquí podrás crear tus servicios. Completa los detalles necesarios para ofrecer tus servicios a los clientes y destacar en las áreas que selecciones."
              title="Crea un servicio"
            />
            <CreateServiceForm setSelectedTab={setSelectedTab} />
          </article>
        </Tab>
        <Tab
          key={TabsKeys.serviceRates}
          isDisabled={
            !basicData.category ||
            !basicData.subCategory ||
            !basicData.serviceName ||
            !basicData.serviceDescription
          }
          title="Personalizar tarifas"
        >
          <article className="grid gap-4 pt-6">
            <div className="flex justify-between">
              <TitleInfo infoText="" title="Personalizar tarifas" />
              <Button isIconOnly variant="light" onPress={onOpen}>
                <FeatherIcon icon="info" />
              </Button>
              <RateModalHelp isOpen={isOpen} onOpenChange={onOpenChange} />
            </div>
            <p className="text-primary">Tarifas</p>
            {rates.length > 0 ? (
              <>
                {rates.map((rate) => (
                  <RateCard key={`${rate.name}-${rate.cost}`} rateData={rate} />
                ))}
                <RatesServicesForm
                  setShowForm={setShowForm}
                  showForm={showForm}
                />
              </>
            ) : showForm ? (
              <>
                <RatesServicesForm
                  setShowForm={setShowForm}
                  showForm={showForm}
                />
              </>
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
          key={TabsKeys.location}
          isDisabled={!rates.length}
          title="Asociar ubicación"
        >
          <article className="grid gap-5 pt-6">
            <TitleInfo
              infoText="Selecciona las ubicaciones donde el servicio estará disponible. Ten en cuenta que, según la ubicación, deberás desplazarte a la locación del cliente o el cliente se desplazará a la tuya."
              title="Elije una ubicación"
            />
            <AddLocationService />
          </article>
        </Tab>
      </Tabs>
      <CustomButton
        rates={rates}
        setSelectedTab={setSelectedTab}
        step={selectedTab}
      />
    </div>
  );
}

export default CreateService;
