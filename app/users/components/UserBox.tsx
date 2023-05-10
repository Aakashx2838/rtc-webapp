"use client";

//* Type definitions
import { FC, useCallback } from "react";
import { User } from "@prisma/client";
interface IUserBoxProps {
  data: User;
}

//* Dependency Library imports
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

//* Component dependencies
import Avatar from "@/app/components/Avatar";
import LoadingModal from "@/app/components/LoadingModal";

//* Redux

//* Configurations

const UserBox: FC<IUserBoxProps> = ({ data }) => {
  //* Hooks
  const router = useRouter();
  //* Props

  //* State
  const [isLoading, setIsLoading] = useState<boolean>(false);

  //* Effects

  //* Functions
  const handleClick = useCallback(() => {
    setIsLoading(true);
    axios
      .post("/api/conversations", { userId: data.id })
      .then((data) => {
        router.push(`/conversations/${data.data.id}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [data, router]);

  //* Render

  return (
    <>
      {isLoading && <LoadingModal />}
      <div
        onClick={handleClick}
        className="w-full relative flex items-center space-x-3 bg-white p-3 hover:bg-neutral-100 rounded-lg transition cursor-pointer"
      >
        <Avatar user={data} />
        <div className="min-w-0 flex-1">
          <div className="focus:outline-none">
            <div className="flex items-center justify-between mb-1">
              <p className="text-md font-medium text-gray-900">{data.name}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserBox;
