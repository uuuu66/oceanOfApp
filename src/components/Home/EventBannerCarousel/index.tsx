import BannerCard from "@/components/Common/BannerCard";
import BannerEvent from "@/models/BannerEvent";
import { FunctionComponent, PropsWithChildren, useState } from "react";
import BannerPagination from "./BannerPagination";

interface Props extends PropsWithChildren {
  bannerEvents: BannerEvent[];
}

const EventBannerCarousel: FunctionComponent<Props> =
  function EventBannerCarousel({ bannerEvents }) {
    const [index, setIndex] = useState(0);
    return (
      <div className="h-80 w-full overflow-hidden relative">
        {bannerEvents.map((event) => (
          <BannerCard key={event.id} src={event.getImgSrc} />
        ))}
        <BannerPagination currentIndex={index} maxIndex={bannerEvents.length} />
      </div>
    );
  };

export default EventBannerCarousel;
