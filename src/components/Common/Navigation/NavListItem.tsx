"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
export interface NavListItemProps {
  iconSrc: string;
  name: string;
  to: string;
}
export default function NavListItem({ iconSrc, name, to }: NavListItemProps) {
  const router = useRouter();
  const onClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(to);
  };
  return (
    <div
      onClick={onClick}
      style={{ flex: "1 1 20px" }}
      className=" justify-center  items-center flex flex-col gap-1"
    >
      <Image width={24} height={24} alt={name} src={iconSrc} />
      <span className="text-xs">{name}</span>
    </div>
  );
}
