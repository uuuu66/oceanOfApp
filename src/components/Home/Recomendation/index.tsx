import SectionContainer from "@/components/Common/Container/SectionContainer";
import GoodsCard from "@/components/Common/GoodsCard";
import Title from "@/components/Common/Title";
import Goods from "@/models/Goods";
import { FunctionComponent, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  recomendationList: Goods[];
}

const Recomendation: FunctionComponent<Props> = function Recomendation({
  recomendationList,
  children,
}) {
  return (
    <SectionContainer>
      <Title size="3xl">인기 상품</Title>
      <div className="flex w-screen flex-row justify-start ">
        {recomendationList.map((goods, index) => (
          <GoodsCard key={goods.id || index} goodsInfo={goods} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Recomendation;
