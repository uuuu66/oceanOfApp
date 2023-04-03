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
    <div className="absolute right-1 bottom-1 rounded-lg bg-gray-400 opacity-50 text-xs flex justify-center items-center">
      {`${currentIndex || 0}/${maxIndex || 0}`}
    </div>
  );
};

export default BannerPagination;
