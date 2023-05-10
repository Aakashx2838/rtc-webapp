//* Type definitions
interface IParams {
  conversationId: string;
}

//* Dependency Library imports
import getConversationById from "@/app/actions/getConversationById";
import getMessages from "@/app/actions/getMessages";

//* Component dependencies
import EmptyState from "@/app/components/EmptyState";
import Header from "./components/Header";
import Body from "./components/Body";
import Form from "./components/Form";

//* Redux

//* Configurations

const ConversationId = async ({ params }: { params: IParams }) => {
  //* Hooks
  const conversation = await getConversationById(params.conversationId);
  const messages = await getMessages(params.conversationId);

  if (!conversation) {
    return (
      <div className="lg:pl-80 h-full">
        <div className="h-full flex flex-col">
          <EmptyState />
        </div>
      </div>
    );
  }

  //* Props

  //* State

  //* Effects

  //* Functions

  //* Render

  return (
    <div className="lg:pl-80 h-screen">
      <div className="h-full flex flex-col">
        <Header conversation={conversation} />
        <Body initialMessages={messages} />
        <Form />
      </div>
    </div>
  );
};

export default ConversationId;
