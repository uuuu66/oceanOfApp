import SectionContainer from "@/components/Common/Container/SectionContainer";
import Title from "@/components/Common/Title";
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
    <SectionContainer>
      <Title size="3xl">둘러보기</Title>
      <div className="flex flex-wrap px-1 py-1 w-full items-center justify-center">
        {categories.map((category) => (
          <CategoryCard {...category} key={category.id} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default CategoryMenu;
