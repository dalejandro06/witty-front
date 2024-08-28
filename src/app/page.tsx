import ApiRepository from "@/src/repositories/ApiRepository";
import CategorySection from "@/src/modules/guest/CategorySection";
import FooterGuest from "@/src/modules/guest/FooterGuest";
import Hero from "@/src/modules/guest/Hero";
import Navbar from "@/src/components/navbar";

export default async function Home() {
  const categories = await ApiRepository.getCategories();

  return (
    <>
      <Navbar />
      <Hero />
      <CategorySection categories={categories} />
      <FooterGuest />
    </>
  );
}
