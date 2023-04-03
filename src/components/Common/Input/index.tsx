import React, { FunctionComponent, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
  placeholder?: string;
  onClick?: React.MouseEventHandler;
  onChange?: React.ChangeEventHandler;
}

const Input: FunctionComponent<Props> = function Input({
  placeholder,
  onClick,
  onChange,
  children,
}) {
  return (
    <input
      className="h-8 px-5 rounded-md"
      placeholder={placeholder || "검색"}
      onClick={onClick}
      onChange={onChange}
      defaultValue={typeof children === "string" ? children : ""}
    ></input>
  );
};

export default Input;
