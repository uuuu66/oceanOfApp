import React from "react";
import NavListItem, { NavListItemProps } from "./NavListItem";

interface Props {
  navList: NavListItemProps[];
}
export default function Navigation({ navList }: Props) {
  return (
    <div className="fixed flex z-50 justify-between items-center bottom-0  px-2 py-2 gap-1 w-full shadow-inner">
      {navList.map((item) => (
        <NavListItem {...item} key={item.name} />
      ))}
    </div>
  );
}
