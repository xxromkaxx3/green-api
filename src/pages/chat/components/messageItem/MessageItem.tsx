import { ChatMessageItem } from "../../../../types/chat";
import { StyledMessageItem } from "../styled-components";

interface Props {
  messageItem: ChatMessageItem;
}

export const MessageItem: React.FC<Props> = ({ messageItem }) => {
  return (
    <StyledMessageItem isMine={messageItem.isMine} >
      {messageItem.message}
    </StyledMessageItem>
  );
};
