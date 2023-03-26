import margin from "@/styles/margin";
import { FunctionComponent, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

const Section: FunctionComponent<Props> = function Section({ children }) {
  return <div>{children}</div>;
};

export default Section;
