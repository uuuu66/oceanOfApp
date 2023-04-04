import Goods from "@/models/Goods";
import Image from "next/image";
import { FunctionComponent, PropsWithChildren, useState } from "react";
import Carousel from "../Carousel";

interface Props extends PropsWithChildren {
  goodsInfo: Goods;
}

const GoodsCard: FunctionComponent<Props> = function GoodsCard({
  goodsInfo,
  children,
}) {
  const { name, price, status, imgSrcs } = goodsInfo;
  const [index, setIndex] = useState(0);
  return (
    <div className="flex flex-col py-2 px-3">
      <Carousel index={index} setIndex={setIndex} srcs={imgSrcs}></Carousel>
    </div>
  );
};

export default GoodsCard;
