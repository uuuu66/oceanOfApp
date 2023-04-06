"use client";
import Carousel from "@/components/Common/Carousel";
import SectionContainer from "@/components/Common/Container/SectionContainer";
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
      <SectionContainer>
        <Title size="3xl">진행중인 이벤트</Title>
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
      </SectionContainer>
    );
  };

export default EventBannerCarousel;
