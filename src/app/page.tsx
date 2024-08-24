import Hero from "../modules/guest/Hero";
import CategorySection from "../modules/guest/CategorySection";
import FooterGuest from "../modules/guest/FooterGuest";

import Navbar from "@/src/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategorySection />
      <FooterGuest />
    </>
  );
}
