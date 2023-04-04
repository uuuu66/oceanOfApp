import BannerEvent from "@/models/BannerEvent";
import Image from "next/image";
import { FunctionComponent, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  src: string;
}

const CarouselCard: FunctionComponent<Props> = function CarouselCard({ src }) {
  return (
    <div className="w-screen h-full relative flex-shrink-0 flex-grow">
      <Image
        src={src}
        className={"w-screen h-full "}
        fill={true}
        alt="배너 이미지"
      />
    </div>
  );
};

export default CarouselCard;
