//* Type definitions
import { ReactNode } from "react";

//* Dependency Library imports
import getCurrentUser from "@/app/actions/getCurrentUser";

//* Component dependencies
import DesktopSidebar from "./DesktopSidebar";
import MobileFooter from "./MobileFooter";

//* Redux

//* Configurations

async function Sidebar({ children }: { children: ReactNode }) {
  //* Hooks

  //* Props

  //* State

  //* Effects

  //* Functions
  const currentUser = await getCurrentUser();

  //* Render

  return (
    <div className="h-full">
      <DesktopSidebar currentUser={currentUser!} />
      <MobileFooter />
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
}

export default Sidebar;
