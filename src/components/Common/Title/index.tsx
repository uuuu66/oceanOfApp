import { FunctionComponent, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
  size?: string;
}

const Title: FunctionComponent<Props> = function Title({
  className,
  children,
  size,
}) {
  return (
    <div
      className={`font-bold ${size ? `text-${size}` : "text-2xl"} px-4 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
};

export default Title;
