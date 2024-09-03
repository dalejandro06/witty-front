"use client";
import { Chip } from "@nextui-org/react";
import FeatherIcon from "feather-icons-react";

import { Category } from "@/types/ApiTypes";

type Props = {
  categories: Category[];
  selectedCategory: Category;
  setSelectedCategory: (c: Category) => void;
};

function CategoryChips({
  categories,
  selectedCategory,
  setSelectedCategory,
}: Props) {
  const isSelectedItem = (item: Category) => selectedCategory.id === item.id;

  return (
    <>
      {categories.map((item) => (
        <Chip
          key={item.id}
          className="cursor-pointer"
          startContent={<FeatherIcon icon={item.icon} size={15} />}
          style={
            isSelectedItem(item)
              ? { backgroundColor: item.color }
              : { border: `1px solid ${item.color}`, color: item.color }
          }
          variant={isSelectedItem(item) ? "flat" : "bordered"}
          onClick={() => setSelectedCategory(item)}
        >
          {item.title}
        </Chip>
      ))}
    </>
  );
}

export default CategoryChips;
