import { FunctionComponent, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  className: string;
}

const Description: FunctionComponent<Props> = function Description({
  className,
  children,
}) {
  return <div className={`px-4 text-sm ${className}`}>{children}</div>;
};

export default Description;
