import HeroLandingSupplier from "@/app/modules/landing-supplier/HeroLandingSupplier";
import Navbar from "@/components/navbar";
import AWSBanner from "@/app/modules/landing-supplier/AWSBanner";
import FeatureCards from "@/app/modules/landing-supplier/FeatureCards";

function page() {
  return (
    <div>
      <Navbar session={null} />
      <HeroLandingSupplier />
      <AWSBanner />
      <FeatureCards />
    </div>
  );
}

export default page;
