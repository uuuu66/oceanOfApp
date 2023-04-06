"use client";
import Goods from "@/models/Goods";
import { FunctionComponent, PropsWithChildren, useState } from "react";
import Carousel from "../Carousel";
import Title from "../Title";
import Descriptions from "./Info/Descriptions";
import TitlePrice from "./Info/TitlePrice";

interface Props extends PropsWithChildren {
  goodsInfo: Goods;
}

const GoodsCard: FunctionComponent<Props> = function GoodsCard({
  goodsInfo,
  children,
}) {
  const { name, price, status, imgSrcs, description } = goodsInfo;
  const [index, setIndex] = useState(imgSrcs.length);
  return (
    <div className="flex flex-col z-10 py-2 gap-4 w-full">
      <Carousel index={index} setIndex={setIndex} srcs={imgSrcs}></Carousel>
      <TitlePrice title={name} price={price || 0}></TitlePrice>
      <Descriptions>{description}</Descriptions>
    </div>
  );
};

export default GoodsCard;
