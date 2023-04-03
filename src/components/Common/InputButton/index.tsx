import React from "react";
import Input from "../Input";
interface Props {
  onClick?: React.MouseEventHandler;
  placeholder?: string;
  searchValue?: string;
}
export default function index({ onClick, placeholder, searchValue }: Props) {
  return (
    <div>
      <Input placeholder={placeholder || "검색"} onClick={onClick}>
        {searchValue || ""}
      </Input>
    </div>
  );
}
