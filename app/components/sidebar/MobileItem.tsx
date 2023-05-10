"use client";
//* Type definitions
import { IconType } from "react-icons";
import { FC } from "react";

interface IMobileItemProps {
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

const MobileItem: FC<IMobileItemProps> = ({
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
    <Link
      href={href}
      onClick={onClick}
      className={clsx(
        "group flex gap-x-3 text-sm leading-6 font-semibold w-full justify-center p-4 text-gray-500 hover:text-black hover:bg-gray-100",
        active && "bg-gray-100 text-black",
      )}
    >
      <Icon className="h-6 w-6" />
    </Link>
  );
};

export default MobileItem;
