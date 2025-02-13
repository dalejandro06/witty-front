import { Card, CardBody, Link } from "@heroui/react";
import Image from "next/image";

import BannerImage from "@/assets/client-supplier-banner.png";

function SupplierBanner() {
  return (
    <Card isPressable as={Link} className="mt-8" href="/landing-supplier">
      <CardBody className="flex-row items-center bg-black">
        <p className="text-secondary font-bold">
          ¿Tienes un <strong className="text-yellow-300">servicio</strong> que
          ofrecer? Únete como proveedor y empieza a conectar con nuevos clientes
        </p>
        <Image alt="Ofrece un servicio" src={BannerImage} width={120} />
      </CardBody>
    </Card>
  );
}

export default SupplierBanner;
