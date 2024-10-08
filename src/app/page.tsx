import { redirect } from "next/navigation";

import { getCategories } from "@/repositories/ApiRepository";
import CategorySection from "@/app/modules/guest/CategorySection";
import FooterGuest from "@/app/modules/guest/FooterGuest";
import Hero from "@/app/modules/guest/Hero";
import Navbar from "@/components/navbar";
import { auth } from "@/auth";

export const revalidate = 0;

export default async function Home() {
  const categories = await getCategories();
  const session = await auth();

  if (session && session.user) {
    redirect("/supplier");
  }

  return (
    <>
      <Navbar session={session} />
      <Hero />
      <CategorySection categories={categories} />
      <FooterGuest />
    </>
  );
}
