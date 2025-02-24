"use client";
import { useFormik } from "formik";
import { Button, Input, Textarea } from "@heroui/react";
import toast from "react-hot-toast";

import ServiceCard from "@/components/ServiceCard";
import TitleInfo from "@/components/TitleInfo";
import WBreadcrumb, { BreadcrumbItem } from "@/components/WBreadcrumb";

const breadcrumbItems: BreadcrumbItem[] = [
  { text: "Inicio", href: "/" },
  { text: "Compartir perfil" },
];

// TODO:  revisar si debe ir en supplier o client o shared, y revisar ruta
function Invite() {
  const formik = useFormik({
    initialValues: {
      email: "",
      serviceDescription: "",
    },
    onSubmit() {
      toast.success("¡Se ha enviado la invitación!");
    },
  });

  // TODO: traer datos reales del servicio en serviceInfo
  return (
    <>
      <WBreadcrumb items={breadcrumbItems} />
      <div className="grid gap-5">
        <TitleInfo
          infoText="Envía invitaciones a tus clientes por correo y comparte el acceso a este servicio."
          title="Invitar a un servicio"
        />
        <ServiceCard
          serviceInfo={{
            id: 1,
            name: "Servicio",
            description: "Descripcion",
            category: {
              id: 1,
              title: "Restauración de computadores",
              description: "",
              category_line_item: {
                color: "",
                icon: "",
                id: 1,
                title: "Peluqueria",
              },
            },
            costs: [],
            allowed_locations: [{ id: 1, name: "Bogotá" }],
            active: true,
            deleted_by_user: false,
            supplier_profile: 1,
          }}
        />
        <form className="grid gap-3" onSubmit={formik.handleSubmit}>
          <Input
            isRequired
            required
            id="email"
            label="Correo"
            name="email"
            placeholder="witty@gmail.com"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <Textarea
            id="serviceDescription"
            label="Descripción servicio"
            name="serviceDescription"
            value={formik.values.serviceDescription}
            onChange={formik.handleChange}
          />
          <Button
            className="text-black"
            color="secondary"
            size="lg"
            type="submit"
          >
            Enviar invitación
          </Button>
        </form>
      </div>
    </>
  );
}

export default Invite;
