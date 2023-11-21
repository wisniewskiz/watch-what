import React from "react";
import "./Input.css";

export default function Input({
  name,
  className,
  placeholder,
  onChange,
  value,
}) {
  return (
    <input
      type="text"
      name={name}
      className={className}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}
