"use client";

//* Type definitions

//* Dependency Library imports
import clsx from "clsx";
import useConversation from "../hooks/useConversation";
import EmptyState from "../components/EmptyState";

//* Component dependencies

//* Redux

//* Configurations

const Conversation = () => {
  //* Hooks
  const { isOpen } = useConversation();

  //* Props

  //* State

  //* Effects

  //* Functions

  //* Render

  return (
    <div
      className={clsx("lg:pl-80 h-full lg:block", isOpen ? "block" : "hidden")}
    >
      <EmptyState />
    </div>
  );
};

export default Conversation;
