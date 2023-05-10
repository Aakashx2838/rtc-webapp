"use client";

//* Type definitions
import { FC } from "react";
import { User } from "@prisma/client";
interface IAvatarProps {
  user?: User;
}

//* Dependency Library imports
import useActiveList from "../hooks/useActiveList";

//* Component dependencies
import Image from "next/image";
import { BiUser } from "react-icons/bi";

//* Redux

//* Configurations

const Avatar: FC<IAvatarProps> = ({ user }) => {
  //* Hooks
  const { members } = useActiveList();
  const isActive = members?.indexOf(user?.email!) !== -1;

  //* Props

  //* State

  //* Effects

  //* Functions

  //* Render

  return (
    <div className="relative">
      <div className="relative inline-block rounded-full overflow-hidden h-9 w-9 md:h-11 md:w-11">
        <div className="w-full h-full flex items-center justify-center bg-slate-300">
          {!user?.image ? (
            <BiUser size={26} />
          ) : (
            <Image alt="avatar" src={user?.image} fill />
          )}
        </div>
      </div>
      {isActive && (
        <span className="absolute block rounded-full bg-green-500 ring-2 ring-white top-0 right-0 h-2 w-2 md:h-3 md:w-3" />
      )}
    </div>
  );
};

export default Avatar;
