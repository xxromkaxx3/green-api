import { ChatMessageItem } from "../../../../types/chat";
import { MessageItem } from "../messageItem";
import { StyledChatWindow } from "../styled-components";

interface Props {
  chatMessageList: ChatMessageItem[];
}

export const ChatWindow: React.FC<Props> = ({ chatMessageList }) => {
  return (
    <StyledChatWindow>
      {chatMessageList.map((item) => (
        <MessageItem key={item.id} messageItem={item} />
      ))}
    </StyledChatWindow>
  );
};
