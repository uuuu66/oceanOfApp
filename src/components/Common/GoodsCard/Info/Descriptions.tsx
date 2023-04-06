import { FunctionComponent, PropsWithChildren } from "react";
import Description from "../../Description";

interface Props extends PropsWithChildren {}

const Descriptions: FunctionComponent<Props> = function Descriptions({
  children,
}) {
  return <Description className="mt-3">{children}</Description>;
};

export default Descriptions;
