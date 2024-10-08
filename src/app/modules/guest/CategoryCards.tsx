"use client";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Link,
  Skeleton,
  useDisclosure,
} from "@nextui-org/react";
import FeatherIcon from "feather-icons-react";

import LoginModal from "./LoginModal";

import { SubCategory } from "@/types/ApiTypes";

type Props = {
  cards: SubCategory[];
  loading: boolean;
};

function CategoryCards({ cards, loading }: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  if (loading)
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
                <FeatherIcon icon={item.category_line_item.icon} size={15} />
              </div>
              <div className="flex flex-col">
                <p className="text-md">{item.title}</p>
                <p className="text-small text-default-500">
                  {item.category_line_item.title}
                </p>
              </div>
            </div>
            <div className="bg-base-blue py-1 px-2 rounded-full text-white text-sm min-w-[27px] flex items-center justify-center">
              {item.total_services && `+${item.total_services}`}
            </div>
          </CardHeader>
          <CardBody>
            <p>{item.description}</p>
          </CardBody>
          <CardFooter>
            <Button
              showAnchorIcon
              as={Link}
              className="text-base-blue"
              variant="light"
              onPress={onOpen}
            >
              Conoce todos los servicios
            </Button>
          </CardFooter>
        </Card>
      ))}
      <LoginModal isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
}

export default CategoryCards;
