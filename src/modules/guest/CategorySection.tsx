"use client";
import { Divider } from "@nextui-org/react";
import { useEffect, useState } from "react";

import CategoryChips from "./CategoryChips";
import CategoryCards from "./CategoryCards";

import { Category, SubCategory } from "@/types/ApiTypes";
import ApiRepository from "@/repositories/ApiRepository";
import { FetchStatus } from "@/types";

type Props = {
  categories: Category[];
};

function CategorySection({ categories }: Props) {
  const [cards, setCards] = useState<SubCategory[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category>(
    categories[0],
  );
  const [status, setStatus] = useState<FetchStatus>("idle");

  useEffect(() => {
    setStatus("loading");
    ApiRepository.getSubCategories({
      category_line_item: selectedCategory.id,
    })
      .then(setCards)
      .catch(() => setStatus("error"))
      .finally(() => setStatus("idle"));
  }, [selectedCategory]);

  return (
    <section className="bg-white mb-20">
      <div className="bg-gray-200 pt-10 px-6">
        <p className="text-lg font-semibold">Categorías</p>
        <div className="overflow-x-scroll my-5 bg">
          <div className="flex gap-3">
            <CategoryChips
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </div>
        </div>
        <Divider className="my-5" />
      </div>
      <div className="pt-10 px-6 flex flex-col gap-5">
        <CategoryCards cards={cards} loading={status === "loading"} />
      </div>
    </section>
  );
}

export default CategorySection;
