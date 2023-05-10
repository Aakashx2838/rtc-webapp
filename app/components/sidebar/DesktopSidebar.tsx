"use client";

//* Type definitions
import { FC } from "react";
import { User } from "@prisma/client";
interface IDesktopSidebarProps {
  currentUser: User;
}

//* Dependency Library imports
import { useState } from "react";
import useRoutes from "@/app/hooks/useRoute";

//* Component dependencies
import DesktopItem from "./DesktopItem";
import Avatar from "../Avatar";
import SettingsModal from "./SettingsModal";

//* Redux

//* Configurations

const DesktopSidebar: FC<IDesktopSidebarProps> = ({ currentUser }) => {
  //* Hooks
  const routes = useRoutes();

  //* Props

  //* State
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //* Effects

  //* Functions

  //* Render

  return (
    <>
      <SettingsModal
        currentUser={currentUser}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:w-20 cl:px-6 lg:overflow-y-auto lg:bg-white lg:border-white lg:border-r-[1px] lg:pb-4 lg:flex lg:flex-col lg:justify-between ">
        <nav className="mt-4 flex flex-col justify-between">
          <ul role="list" className="flex flex-col items-center space-y-1">
            {routes.map((item) => (
              <DesktopItem
                key={item.label}
                href={item.href}
                label={item.label}
                icon={item.icon}
                active={item.active}
                onClick={item.onClick}
              />
            ))}
          </ul>
        </nav>
        <nav className="mt-4 flex flex-col justify-between items-center">
          <div
            onClick={() => setIsOpen(true)}
            className="cursor-pointer hover:opacity-75 transition"
          >
            <Avatar user={currentUser} />
          </div>
        </nav>
      </div>
    </>
  );
};

export default DesktopSidebar;
