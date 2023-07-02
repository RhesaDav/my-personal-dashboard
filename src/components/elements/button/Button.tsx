import React, { ButtonHTMLAttributes, HTMLProps, ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary" | "accent" | "error" | "success" | "warning";
  children: ReactNode
}

export const Button: React.FC<ButtonProps> = ({ children, variant, ...rest }) => {
  let buttonClassName = "text-white px-4 py-2 rounded-lg transition-colors duration-300 ease-in-out";
  let backgroundColorClass = "";
  let hoverBackgroundColorClass = "";

  switch (variant) {
    case "primary":
      backgroundColorClass = "btn-primary";
      // hoverBackgroundColorClass = "hover:bg-primaryDark";
      break;
    case "secondary":
      backgroundColorClass = "btn-secondary";
      // hoverBackgroundColorClass = "hover:bg-secondaryDark";
      break;
    case "accent":
      backgroundColorClass = "bg-accent";
      hoverBackgroundColorClass = "hover:bg-accentDark";
      break;
    case "error":
      backgroundColorClass = "bg-error";
      hoverBackgroundColorClass = "hover:bg-errorDark";
      break;
    case "success":
      backgroundColorClass = "bg-success";
      hoverBackgroundColorClass = "hover:bg-successDark";
      break;
    case "warning":
      backgroundColorClass = "bg-warning";
      hoverBackgroundColorClass = "hover:bg-warningDark";
      break;
    default:
      break;
  }

  buttonClassName = `${buttonClassName} ${backgroundColorClass} ${hoverBackgroundColorClass}`;

  return (
    <button className={`btn ${buttonClassName} ${rest.className}`} {...rest}>{children}</button>
  );
};
