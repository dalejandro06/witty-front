"use client";
import { Formik } from "formik";
import {
  Button,
  Input,
  Select,
  SelectItem,
  useDisclosure,
} from "@nextui-org/react";
import FeatherIcon from "feather-icons-react";

import Navbar from "@/components/navbar";
import BusinessModal from "@/app/modules/register-supplier/BusinessModal";

const animals = [
  { key: "independent", label: "Propietario solo" },
  { key: "society", label: "Sociedad" },
  { key: "company", label: "Empresa" },
];

function RegisterSupplier() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <div className="bg-primary-blue">
      <Navbar session={null} showButton={false} />
      <div className="px-6 pb-5">
        <div className="font-bold text-4xl text-center text-white">
          <p className="uppercase">
            Regístrate como
            <span className="block text-linear-gradient mx-1">Proveedor</span>
            aquí
          </p>
        </div>
        <Formik
          initialValues={{
            typeBusiness: "",
            name: "",
            bussinessName: "",
          }}
          onSubmit={() => {}}
        >
          {({ errors, handleSubmit, values, setFieldValue }) => (
            <form
              className="my-6 bg-white p-4 rounded-xl grid gap-5"
              id="register-supplier-form"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-5">
                <Select
                  isRequired
                  className="col-span-4"
                  classNames={{
                    trigger: "rounded-e-none border-e-none",
                  }}
                  label="Tipo de negocio"
                  placeholder="Selecciona"
                  variant="bordered"
                >
                  {animals.map((animal) => (
                    <SelectItem key={animal.key}>{animal.label}</SelectItem>
                  ))}
                </Select>
                <Button
                  className="border-gray-200 p-0 min-w-0 h-full rounded-s-none border-s-0"
                  variant="bordered"
                  onPress={onOpen}
                >
                  <FeatherIcon icon="info" />
                </Button>
              </div>
              <Input
                isRequired
                id="fullName"
                isInvalid={!!errors.name}
                label="Nombre completo"
                name="fullName"
                placeholder="Escribe tu nombre"
                value={values.name}
                variant="bordered"
                onChange={(e) => setFieldValue("name", e.target.value)}
              />
              <Input
                isRequired
                id="companyName"
                label="Nombre del negocio"
                name="companyName"
                placeholder="Escribe el nombre del negocio"
                variant="bordered"
              />
              <Input
                isRequired
                id="nit"
                label="NIT"
                name="nit"
                placeholder="Sin digito de verificación"
                variant="bordered"
              />
              <Input
                isRequired
                id="email"
                label="Correo"
                name="email"
                placeholder="wittyapp@example.com"
                type="email"
                variant="bordered"
              />
              <Input
                isRequired
                id="phone"
                label="Número de teléfono"
                name="email"
                placeholder="000 000 0000"
                type="number"
                variant="bordered"
              />
              <Select
                isRequired
                label="Departamento"
                placeholder="Selecciona"
                variant="bordered"
              >
                {animals.map((animal) => (
                  <SelectItem key={animal.key}>{animal.label}</SelectItem>
                ))}
              </Select>
              <Select
                isRequired
                label="Ciudad"
                placeholder="Selecciona"
                variant="bordered"
              >
                {animals.map((animal) => (
                  <SelectItem key={animal.key}>{animal.label}</SelectItem>
                ))}
              </Select>
              <Input
                isRequired
                id="address"
                label="Dirección física"
                name="address"
                placeholder="Carrera 00 # 0 - 0"
                type="text"
                variant="bordered"
              />
            </form>
          )}
        </Formik>
        <Button
          fullWidth
          className="text-black py-6"
          color="secondary"
          form="register-supplier-form"
          type="submit"
        >
          Regístrate
        </Button>
      </div>
      <BusinessModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </div>
  );
}

export default RegisterSupplier;
