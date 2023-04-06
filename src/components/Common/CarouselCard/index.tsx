import Image from "next/image";
import { FunctionComponent, PropsWithChildren } from "react";
import Title from "../Title";

interface Props extends PropsWithChildren {
  src: string;
}

const CarouselCard: FunctionComponent<Props> = function CarouselCard({ src }) {
  return (
    <div className="w-full h-full z-10 relative flex-shrink-0 flex-grow">
      <Image
        src={src}
        className={"w-full h-full bg-neutral-700"}
        fill={true}
        style={{ objectFit: "contain" }}
        alt="배너 이미지"
      />
    </div>
  );
};

export default CarouselCard;
