"use client";

//* Type definitions
import { FC } from "react";
import { User } from "@prisma/client";
interface IAvatarGroupProps {
  users?: User[];
}

//* Dependency Library imports
import { BiUser } from "react-icons/bi";

//* Component dependencies
import Image from "next/image";

//* Redux

//* Configurations

const AvatarGroup: FC<IAvatarGroupProps> = ({ users = [] }) => {
  //* Hooks

  //* Props

  //* State

  //* Effects

  //* Functions
  const sliceUsers = users?.slice(0, 3);

  const positionMap = {
    0: "top-0 left-[12px]",
    1: "bottom-0",
    2: "bottom-0 right-0",
  };

  //* Render

  return (
    <div className="relative h-11 w-11">
      {sliceUsers?.map((user, index) => (
        <div
          key={user.id}
          className={`absolute inline-block rounded-full overflow-hidden h-[21px] w-[21px] ${
            positionMap[index as keyof typeof positionMap]
          }`}
        >
          {user?.image ? (
            <Image alt="avatar" src={user?.image} fill />
          ) : (
            <BiUser size={26} />
          )}
        </div>
      ))}
    </div>
  );
};

export default AvatarGroup;
