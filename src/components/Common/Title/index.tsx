import { FunctionComponent, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className?: string;
}

const Title: FunctionComponent<Props> = function Title({
  className,
  children,
}) {
  return <div className={`font-bold text-xl ${className}`}>{children}</div>;
};

export default Title;
