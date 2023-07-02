import React, { HTMLProps } from "react";

interface Props extends HTMLProps<HTMLInputElement> {
  label?: string;
}

export const Input = ({ label, ...rest }: Props) => {
  return (
    <div className="p-3 rounded-xl">
      {label && <label className="text-light">{label}</label>}
      <input
        className="w-full px-4 py-2 transition duration-300 border border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-primary"
        {...rest}
      />
    </div>
  );
};
