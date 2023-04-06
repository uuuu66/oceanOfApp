"use client";

import { FunctionComponent, PropsWithChildren, useState } from "react";
import CartButton from "../CartButton";
import Input from "../InputButton";
import Logo from "../Logo";

interface Props extends PropsWithChildren {}

export const headerSize = {
  pc: "90px",
  tablet: "60px",
  mobile: "60px",
};

const Header: FunctionComponent<Props> = function Header({ children }) {
  const [i, setI] = useState(0);

  return (
    <div className="flex z-50 justify-between items-center flex-row w-full h-12 py-4 px-4 bg-red-500 fixed top-0">
      <Logo />
      <div className="flex flex-nowrap gap-2 items-center justify-between">
        <Input />
        <CartButton
          howMany={i}
          onClick={() => {
            setI((v) => {
              return v + 1;
            });
          }}
          alt="장바구니"
        />
      </div>
    </div>
  );
};

export default Header;
