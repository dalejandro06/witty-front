import ApiRepository from "@/repositories/ApiRepository";
import CategorySection from "@/modules/guest/CategorySection";
import FooterGuest from "@/modules/guest/FooterGuest";
import Hero from "@/modules/guest/Hero";
import Navbar from "@/components/navbar";

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
