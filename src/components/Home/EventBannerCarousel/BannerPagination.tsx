import React, { FunctionComponent, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  currentIndex?: number;
  maxIndex?: number;
  onClick?: React.MouseEventHandler;
}

const BannerPagination: FunctionComponent<Props> = function BannerPagination({
  children,
  currentIndex,
  maxIndex,
  onClick,
}) {
  return (
    <div className="absolute right-1 -bottom-0 rounded-3xl py-1 px-2 bg-black opacity-75 text-xs flex justify-center items-center text-white">
      {`${currentIndex || 0}/${maxIndex || 0} 이벤트 목록보기`}
    </div>
  );
};

export default BannerPagination;
