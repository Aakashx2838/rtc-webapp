"use client";
//* Type definitions
import { ReactNode } from "react";

interface IButtonProps {
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  children: ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
}

//* Dependency Library imports
import clsx from "clsx";

//* Component dependencies

//* Redux

//* Configurations

const Button: React.FC<IButtonProps> = ({
  children,
  danger,
  disabled,
  fullWidth,
  onClick,
  secondary,
  type,
}) => {
  //* Hooks

  //* Props

  //* State

  //* Effects

  //* Functions

  //* Render

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        "flex justify-center rounded-md px-3 py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
        disabled && "opacity-50 cursor-default",
        fullWidth && "w-full",
        secondary ? "text-gray-900" : "text-white",
        danger &&
          "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-600",
        !danger &&
          !secondary &&
          "bg-sky-500 hover:bg-sky-600 focus-visible:outline-sky-600",
      )}
    >
      {children}
    </button>
  );
};

export default Button;
