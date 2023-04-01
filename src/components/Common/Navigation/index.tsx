import React from "react";
import NavListItem, { NavListItemProps } from "./NavListItem";

interface Props {
  navList: NavListItemProps[];
}
export default function Navigation({ navList }: Props) {
  return (
    <div className="flex justify-between items-center bottom-0 fixed px-2 py-2 gap-1 w-full shadow-inner">
      {navList.map((item) => (
        <NavListItem {...item} key={item.name} />
      ))}
    </div>
  );
}
