"use client";

//* Type definitions
import { FC } from "react";
interface IBodyProps {
  initialMessages: IFullMessageType[];
}

//* Dependency Library imports
import { useState, useEffect, useRef } from "react";
import { pusherClient } from "@/app/libs/pusher";
import { find } from "lodash";
import useConversation from "@/app/hooks/useConversation";

//* Component dependencies
import MessageBox from "./MessageBox";
import { IFullMessageType } from "@/app/types";
import axios from "axios";

//* Redux

//* Configurations

const Body: FC<IBodyProps> = ({ initialMessages }) => {
  //* Hooks
  const { conversationId } = useConversation();

  //* Props

  //* State
  const [messages, setMessages] = useState<IFullMessageType[]>(initialMessages);
  const bottomRef = useRef<HTMLDivElement>(null);

  //* Effects
  useEffect(() => {
    axios.post(`/api/conversations/${conversationId}/seen`);
  }, [conversationId]);

  useEffect(() => {
    pusherClient.subscribe(conversationId);
    bottomRef?.current?.scrollIntoView({ behavior: "smooth" });

    const messageHandler = (message: IFullMessageType) => {
      axios.post(`/api/conversations/${conversationId}/seen`);

      setMessages((prev) => {
        if (find(prev, { id: message.id })) return prev;

        return [...prev, message];
      });

      bottomRef?.current?.scrollIntoView({ behavior: "smooth" });
    };

    const updateMessageHandler = (newMessage: IFullMessageType) => {
      setMessages((current) =>
        current.map((currentMessage) => {
          if (currentMessage.id === newMessage.id) {
            return newMessage;
          }
          return currentMessage;
        }),
      );
    };

    pusherClient.bind("messages:new", messageHandler);
    pusherClient.bind("messages:update", updateMessageHandler);

    return () => {
      pusherClient.unsubscribe(conversationId);

      pusherClient.unbind("messages:new");
      pusherClient.unbind("messages:update");
    };
  }, [conversationId]);

  //* Functions

  //* Render

  return (
    <div className="flex-1 overflow-y-auto">
      {messages.map((message, i) => (
        <MessageBox
          key={message.id}
          isLast={i === messages.length - 1}
          data={message}
        />
      ))}
      <div ref={bottomRef} className="pt-24" />
    </div>
  );
};

export default Body;
