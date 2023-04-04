"use client";
import Carousel from "@/components/Common/Carousel";
import Title from "@/components/Common/Title";
import BannerEvent from "@/models/BannerEvent";
import React, { FunctionComponent, PropsWithChildren, useState } from "react";
import BannerPagination from "./BannerPagination";

interface Props extends PropsWithChildren {
  bannerEvents: BannerEvent[];
}

const EventBannerCarousel: FunctionComponent<Props> =
  function EventBannerCarousel({ bannerEvents }) {
    const [index, setIndex] = useState(bannerEvents.length);

    return (
      <div className="flex flex-col justify-between gap-2">
        <Title className="px-4">진행중인 이벤트</Title>
        <Carousel
          index={index}
          setIndex={setIndex}
          srcs={bannerEvents.map((val) => val.imgSrc)}
        >
          <BannerPagination
            currentIndex={(index + 1) % 3 === 0 ? 3 : (index + 1) % 3}
            maxIndex={bannerEvents.length}
          />
        </Carousel>
      </div>
    );
  };

export default EventBannerCarousel;
