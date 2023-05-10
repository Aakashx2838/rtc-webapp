"use client";

//* Type definitions
import { FC } from "react";
import { User } from "@prisma/client";
import { IFullConversationType } from "@/app/types";
interface IConversationListProps {
  users: User[];
  initialItems: IFullConversationType[];
}

//* Dependency Library imports
import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { pusherClient } from "@/app/libs/pusher";
import clsx from "clsx";
import useConversation from "@/app/hooks/useConversation";
import { find } from "lodash";

//* Component dependencies
import ConversationBox from "./ConversationBox";
import GroupChatModal from "./GroupChatModal";
import { MdOutlineGroupAdd } from "react-icons/md";

//* Redux

//* Configurations

const ConversationList: FC<IConversationListProps> = ({
  initialItems,
  users,
}) => {
  //* Hooks
  const session = useSession();
  const router = useRouter();

  const { conversationId, isOpen } = useConversation();

  const pusherKey = useMemo(() => {
    return session.data?.user?.email;
  }, [session.data?.user?.email]);

  //* Props

  //* State
  const [items, setItems] = useState<IFullConversationType[]>(initialItems);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  //* Effects
  useEffect(() => {
    if (!pusherKey) {
      return;
    }

    pusherClient.subscribe(pusherKey);

    const newHandler = (conversation: IFullConversationType) => {
      setItems((prev) => {
        if (find(prev, { id: conversationId })) {
          return prev;
        }

        return [conversation, ...prev];
      });
    };

    const updateHandler = (conversation: IFullConversationType) => {
      setItems((prev) =>
        prev.map((currentConversation) => {
          if (currentConversation.id === conversation.id) {
            return {
              ...currentConversation,
              messages: conversation.messages,
            };
          }

          return currentConversation;
        }),
      );
    };

    const removeHandler = (conversation: IFullConversationType) => {
      setItems((current) => {
        return [
          ...current.filter((currentConversation) => {
            return currentConversation.id !== conversation.id;
          }),
        ];
      });

      if (conversationId === conversation.id) {
        router.push("/conversations");
      }
    };

    pusherClient.bind("conversation:new", newHandler);
    pusherClient.bind("conversation:update", updateHandler);
    pusherClient.bind("conversation:remove", removeHandler);

    return () => {
      pusherClient.unsubscribe(pusherKey);
      pusherClient.unbind("conversation:new", newHandler);
      pusherClient.unbind("conversation:update", updateHandler);
      pusherClient.unbind("conversation:remove", removeHandler);
    };
  }, [pusherKey, conversationId, router]);

  //* Functions

  //* Render

  return (
    <>
      <GroupChatModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        users={users}
      />
      <aside
        className={clsx(
          "fixed inset-y-0 pb-20 lg:pb-0 lg:left-20 lg:w-80 lg:block overflow-y-auto border-r border-gray-200",
          isOpen ? "hidden" : "block w-full left-0",
        )}
      >
        <div className="px-5">
          <div className="flex justify-between mb-4 pt-4">
            <div className="text-2xl font-bold text-neutral-800">Messages</div>
            <div
              className="rounded-full p-2 bg-gray-100 text-gray-600 cursor-pointer hover:opacity-75 transition"
              onClick={() => setIsModalOpen(true)}
            >
              <MdOutlineGroupAdd size={20} />
            </div>
          </div>
          {items.map((item) => (
            <ConversationBox
              key={item.id}
              data={item}
              selected={conversationId === item.id}
            />
          ))}
        </div>
      </aside>
    </>
  );
};

export default ConversationList;
