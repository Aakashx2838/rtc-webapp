import { Conversation, Message, User } from "@prisma/client";

export type IFullMessageType = Message & {
  sender: User;
  seen: User[];
};

export type IFullConversationType = Conversation & {
  users: User[];
  messages: IFullMessageType[];
};
