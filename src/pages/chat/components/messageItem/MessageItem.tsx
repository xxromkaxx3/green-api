import { ChatMessageItem } from "../../../../types/chat";
import { StyledMessageItem } from "../styled-components";

interface Props {
  messageItem: ChatMessageItem;
}

export const MessageItem: React.FC<Props> = ({ messageItem }) => {
  return (
    <StyledMessageItem
      style={{ alignSelf: messageItem.isMine ? "end" : "start" }}
    >
      {messageItem.message}
    </StyledMessageItem>
  );
};
