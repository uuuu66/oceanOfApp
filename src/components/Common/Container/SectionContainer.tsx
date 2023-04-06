import { FunctionComponent, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

const SectionContainer: FunctionComponent<Props> = function SectionContainer({
  children,
}) {
  return <div className="py-3 flex w-screen flex-col gap-6">{children}</div>;
};

export default SectionContainer;
