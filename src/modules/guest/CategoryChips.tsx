"use client";
import { Chip } from "@nextui-org/react";
import FeatherIcon from "feather-icons-react";
import { useState } from "react";

import { Category } from "@/src/types/ApiTypes";

type Props = {
  categories: Category[];
};

function CategoryChips({ categories }: Props) {
  const [categorySelected, setCategorySelected] = useState<Category>(
    categories[0],
  );

  const isSelectedItem = (item: Category) => categorySelected.id === item.id;

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
          onClick={() => setCategorySelected(item)}
        >
          {item.title}
        </Chip>
      ))}
    </>
  );
}

export default CategoryChips;
