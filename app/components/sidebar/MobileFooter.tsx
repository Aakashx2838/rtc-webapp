"use client";

import useConversation from "@/app/hooks/useConversation";
//* Type definitions

//* Dependency Library imports
import useRoutes from "@/app/hooks/useRoute";

//* Component dependencies
import MobileItem from "./MobileItem";

//* Redux

//* Configurations

export default function MobileFooter() {
  //* Hooks
  const routes = useRoutes();
  const { isOpen } = useConversation();
  if (isOpen) return null;

  //* Props

  //* State

  //* Effects

  //* Functions

  //* Render

  return (
    <div className="fixed justify-between w-full bottom-0 z-40 flex items-center bg-white border-t-[1px] lg:hidden">
      {routes.map((item) => (
        <MobileItem
          key={item.label}
          href={item.href}
          label={item.label}
          icon={item.icon}
          active={item.active}
          onClick={item.onClick}
        />
      ))}
    </div>
  );
}
