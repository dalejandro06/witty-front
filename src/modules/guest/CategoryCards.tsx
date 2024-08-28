"use client";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
  Skeleton,
} from "@nextui-org/react";
import FeatherIcon from "feather-icons-react";
import { useEffect, useState } from "react";

import ApiRepository from "@/src/repositories/ApiRepository";
import { SubCategory } from "@/src/types/ApiTypes";

type Props = {
  id: number;
};

function CategoryCards({ id }: Props) {
  const [cards, setCards] = useState<SubCategory[]>([]);

  useEffect(() => {
    ApiRepository.getSubCategories({ category_line_item: id }).then(setCards);
  }, []);

  if (!cards.length)
    return (
      <>
        {[1, 2, 3, 4].map((id) => (
          <Card
            key={id}
            className="w-full space-y-5 p-4 h-[160px] justify-between"
            radius="lg"
          >
            <div className="flex items-center gap-2">
              <Skeleton className="rounded-lg">
                <div className="p-2 rounded-xl w-[40px] h-[40px]" />
              </Skeleton>
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-3 w-3/5 rounded-lg bg-default-200" />
              </Skeleton>
            </div>
            <div className="space-y-3">
              <Skeleton className="w-3/5 rounded-lg">
                <div className="h-3 w-3/5 rounded-lg bg-default-200" />
              </Skeleton>
            </div>
            <Skeleton className="w-3/5 rounded-lg">
              <div className="h-3 w-3/5 rounded-lg bg-default-200" />
            </Skeleton>
          </Card>
        ))}
      </>
    );

  return (
    <>
      {cards.map((item) => (
        <Card key={item.id} className="max-w-[400px]">
          <CardHeader className="flex gap-3 justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-secondary p-2 rounded-xl">
                <FeatherIcon icon="tool" size={15} />
              </div>
              <div className="flex flex-col">
                <p className="text-md">{item.title}</p>
                <p className="text-small text-default-500">
                  {item.category_line_item}
                </p>
              </div>
            </div>
            <div className="bg-base-blue py-1 px-2 rounded-full text-white text-sm">
              {item.total_services && `+${item.total_services}`}
            </div>
          </CardHeader>
          <CardBody>
            <p>{item.description}</p>
          </CardBody>
          <CardFooter>
            <Link showAnchorIcon className="text-base-blue" href="/login">
              Conoce todos los servicios
            </Link>
          </CardFooter>
        </Card>
      ))}
    </>
  );
}

export default CategoryCards;
