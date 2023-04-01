import Image from "next/image";
import { FunctionComponent } from "react";

interface Props {
  alt: string;
  howMany: number;
  onClick: React.MouseEventHandler;
}

const CartButton: FunctionComponent<Props> = function CartButton({
  alt,
  howMany,
  onClick,
}) {
  console.log(howMany);
  return (
    <div
      className="rounded-full w-8 h-8 justify-center items-center flex bg-white relative"
      onClick={onClick}
    >
      <Image alt={alt} src="/Icon/cart.png" width={18} height={18} />
      {howMany > 0 ? (
        <div className="absolute text-white flex items-center justify-center text-xs  rounded-full bg-black w-6 h-6 -top-2 -right-2">
          {howMany > 99 ? "99++" : howMany}
        </div>
      ) : null}
    </div>
  );
};

export default CartButton;
