import { Button } from "@nextui-org/button";
import FeatherIcon from "feather-icons-react";
import { Link } from "@nextui-org/link";

import HeroLandingSupplier from "@/app/modules/landing-supplier/HeroLandingSupplier";
import FeatureCards from "@/app/modules/landing-supplier/FeatureCards";
import { AWSBrand } from "@/components/icons";

async function page() {
  return (
    <div>
      <HeroLandingSupplier />
      <FeatureCards />
      <footer className="bg-blue-900 p-3 flex gap-2 justify-center items-center w-full">
        <AWSBrand fill="#66CC99" size={40} />
        <p className="text-white text-small">Patrocinador oficial de Witty</p>
      </footer>
      <Button
        as={Link}
        className="fixed bottom-5 right-5 rounded-full bg-secondary-500 min-w-[70px] min-h-[70px]"
        href="/"
      >
        <FeatherIcon icon="home" />
      </Button>
    </div>
  );
}

export default page;
