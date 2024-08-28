import { Divider } from "@nextui-org/react";

import CategoryChips from "./CategoryChips";
import CategoryCards from "./CategoryCards";

import { Category } from "@/src/types/ApiTypes";

type Props = {
  categories: Category[];
};

function CategorySection({ categories }: Props) {
  return (
    <section className="bg-white mb-20">
      <div className="bg-gray-200 pt-10 px-6">
        <p className="text-lg font-semibold">Categorías</p>
        <div className="overflow-x-scroll my-5 bg">
          <div className="flex gap-3">
            <CategoryChips categories={categories} />
          </div>
        </div>
        <Divider className="my-5" />
      </div>
      <div className="pt-10 px-6 flex flex-col gap-5">
        <CategoryCards id={1} />
      </div>
    </section>
  );
}

export default CategorySection;
