import { FunctionComponent, PropsWithChildren } from "react";
import Title from "../../Title";

interface Props extends PropsWithChildren {
  title: string;
  price: number;
}

const TitlePrice: FunctionComponent<Props> = function TitlePrice({
  title,
  price,
}) {
  return (
    <div className="flex justify-between ">
      <Title>{title}</Title>
      <Title>{price.toLocaleString()} 원</Title>
    </div>
  );
};

export default TitlePrice;
