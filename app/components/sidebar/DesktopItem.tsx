"use client";
//* Type definitions
import { IconType } from "react-icons";
import { FC } from "react";

interface IDesktopItemProps {
  href: string;
  label: string;
  icon: IconType;
  active?: boolean;
  onClick?: () => void;
}

//* Dependency Library imports
import clsx from "clsx";

//* Component dependencies
import Link from "next/link";

//* Redux

//* Configurations

const DesktopItem: FC<IDesktopItemProps> = ({
  href,
  icon: Icon,
  label,
  active,
  onClick,
}) => {
  //* Hooks

  //* Props

  //* State

  //* Effects

  //* Functions
  const handleClick = () => {
    if (onClick) {
      return onClick();
    }
  };

  //* Render

  return (
    <li onClick={handleClick}>
      <Link
        href={href}
        className={clsx(
          "group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold text-gray-500 hover:text-black hover:bg-gray-100",
          active && "bg-gray-100 text-black",
        )}
      >
        <Icon className="h-6 w-6 shrink-0" />
        <span className="sr-only">{label}</span>
      </Link>
    </li>
  );
};

export default DesktopItem;
