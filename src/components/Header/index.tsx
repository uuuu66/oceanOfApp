import fonts from "@/styles/fonts";
import { media } from "@/styles/screenSizes";
import { FunctionComponent, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {}

export const headerSize = {
  pc: "72px",
  tablet: "56px",
  mobile: "40px",
};

const Header: FunctionComponent<Props> = function Header({ children }) {
  return <div>{children}</div>;
};

export default Header;
