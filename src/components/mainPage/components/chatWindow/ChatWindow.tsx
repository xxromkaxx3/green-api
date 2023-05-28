import { ChatMessageItem } from "../MainPage";
import { MessageItem } from "./messageItem";

interface Props {
  chatMessageList: ChatMessageItem[];
}

export const ChatWindow: React.FC<Props> = ({ chatMessageList }) => {
  return (
    <ul className="chat-window">
      {chatMessageList.map((item) => (
        <MessageItem key={item.id} messageItem={item} />
      ))}
    </ul>
  );
};
