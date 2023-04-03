import { FunctionComponent, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  category: string;
}

const CategoryCard: FunctionComponent<Props> = function CategoryCard({
  children,
}) {
  return <div>hi</div>;
};

export default CategoryCard;
