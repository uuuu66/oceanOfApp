import BannerEvent from "@/models/BannerEvent";
import Image from "next/image";
import { FunctionComponent, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  src: string;
}

const BannerCard: FunctionComponent<Props> = function BannerCard({ src }) {
  return (
    <div className="w-full h-full relative">
      <Image
        src={src}
        className={"w-full h-full "}
        fill={true}
        alt="배너 이미지"
      />
    </div>
  );
};

export default BannerCard;
