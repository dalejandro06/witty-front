import HeroLandingSupplier from "@/app/modules/landing-supplier/HeroLandingSupplier";
import Navbar from "@/components/navbar";
import AWSBanner from "@/app/modules/landing-supplier/AWSBanner";
import FeatureCards from "@/app/modules/landing-supplier/FeatureCards";
import { auth } from "@/auth";

async function page() {
  const session = await auth();

  return (
    <div>
      <Navbar session={session} />
      <HeroLandingSupplier />
      <FeatureCards />
      {/* <footer className="bg-blue-900 p-3 flex gap-2 justify-center items-center w-full">
        <AWSBrand fill="#66CC99" size={40} />
        <p className="text-white text-small">Patrocinador oficial de Witty</p>
      </footer> */}
      <AWSBanner />
    </div>
  );
}

export default page;
