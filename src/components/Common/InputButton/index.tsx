import React from "react";
interface Props {
  onClick?: React.MouseEventHandler;
  placeholder?: string;
}
export default function index({ onClick, placeholder }: Props) {
  return (
    <div>
      <input
        className="h-8 px-5 rounded-md"
        placeholder={placeholder || "검색"}
        onClick={onClick}
      ></input>
    </div>
  );
}
