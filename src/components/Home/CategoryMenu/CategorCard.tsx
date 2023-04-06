import Category from "@/models/Category";
import Image from "next/image";
import { FunctionComponent, PropsWithChildren } from "react";

interface Props extends PropsWithChildren, Category {}

const CategoryCard: FunctionComponent<Props> = function CategoryCard({
  name,
  imgSrc,
}) {
  return (
    <div className="px-2 py-2 flex flex-col gap-1 justify-center items-center relative">
      <Image src={imgSrc} width={64} height={64} alt={name} />

      <div className="text-xs text-black">{name}</div>
    </div>
  );
};

export default CategoryCard;
