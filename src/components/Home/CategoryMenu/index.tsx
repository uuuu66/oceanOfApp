import Category from "@/models/Category";
import Image from "next/image";
import { FunctionComponent, PropsWithChildren } from "react";
import CategoryCard from "./CategorCard";

interface Props extends PropsWithChildren {
  categories: Category[];
}

const CategoryMenu: FunctionComponent<Props> = function CategoryMenu({
  categories,
}) {
  return (
    <div className="flex flex-wrap px-1 py-1 w-full h-96 items-center justify-start">
      {categories.map((category) => (
        <CategoryCard {...category} key={category.id} />
      ))}
    </div>
  );
};

export default CategoryMenu;
