"use client";
import CarouselCard from "@/components/Common/CarouselCard";
import React, {
  Dispatch,
  FunctionComponent,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface Props extends PropsWithChildren {
  srcs: string[];
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
}

const Carousel: FunctionComponent<Props> = function Carousel({
  srcs,
  children,
  index,
  setIndex,
}) {
  const [startPos, setStartPos] = useState(0);
  const [offset, setOffset] = useState(window?.screen.width * srcs.length);
  const [curPos, setCurpos] = useState(0);
  const [isSwipe, setIsSwipe] = useState(false);
  const [isBlock, setIsBlock] = useState(false);
  const handleTouchStart = (e: React.TouchEvent) => {
    setStartPos(e.touches[0].pageX);
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    setCurpos(e.touches[0].pageX);
    setIsSwipe(true);
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (isSwipe) {
      const diff = Math.abs(startPos) - Math.abs(curPos);

      if (Math.abs(diff) > window.screen.width / 4)
        if (diff > 0) {
          setIndex((v) => v + 1);
        } else {
          setIndex((v) => v - 1);
        }
    }
    setStartPos(0);
    setCurpos(0);
    setIsSwipe(false);
  };
  console.log(index);
  useEffect(() => {
    setOffset((v) => window.screen.width * index);
    if (index === srcs.length - 1) {
      setTimeout(() => {
        setIsBlock(true);
      }, 100);
    }
    if (index === srcs.length * 2) {
      setTimeout(() => {
        setIsBlock(true);
      }, 100);
    }
  }, [index]);
  useEffect(() => {
    if (isBlock) {
      if (index === srcs.length - 1) {
        setIndex(index + srcs.length);
      }
      if (index === srcs.length * 2) {
        setIndex(index - srcs.length);
      }
      setTimeout(() => {
        setIsBlock(false);
      }, 100);
    }
  }, [isBlock, index]);
  return (
    <div className="h-80 w-full overflow-hidden relative flex">
      <div
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={`inner flex w-full h-full transition-transform ${
          isBlock ? "duration-0" : "duration-100"
        }`}
        style={{
          transform: isSwipe
            ? `matrix(1,0,0,1,${
                -offset - (Math.abs(startPos) - Math.abs(curPos))
              },0)`
            : `matrix(1,0,0,1,${-offset},0)`,
        }}
      >
        {srcs.map((src, index) => (
          <CarouselCard key={index + "first" + src} src={src} />
        ))}
        {srcs.map((src, index) => (
          <CarouselCard key={index + "second" + src} src={src} />
        ))}
        {srcs.map((src, index) => (
          <CarouselCard key={index + "third" + src} src={src} />
        ))}
      </div>
      {children}
    </div>
  );
};

export default Carousel;
