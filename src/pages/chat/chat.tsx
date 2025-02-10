import { chatApi } from "../../api/chat";
import { IUser } from "../../types/user";
import { ChangeEvent, useState, useEffect } from "react";
import { ChatMessageItem } from "../../types/chat";
import { ChatWindow, TextInputForm } from "./components";
import { ChatContainer, Chats, CurrentChatWrap, CurrentUserChat, Nav } from "./components/styled-components";

interface Props {
  user: IUser;
  destinationId: string;
}

export const Chat: React.FC<Props> = ({ user, destinationId }) => {
  const [textInputValue, setTextInputValue] = useState("");
  const [chatMessageList, setChatMessageList] = useState<ChatMessageItem[]>([]);

  function onChangeHandler(event: ChangeEvent<HTMLInputElement>) {
    setTextInputValue(event.target.value);
  }

  async function fetchMessage() {
    try {
      const result = await chatApi.fetchMessage(user)
      if (result) {
        if (
          result.body.messageData &&
          result.body.messageData.textMessageData &&
          result.body.senderData.chatId === `7${destinationId}@c.us`
        ) {
          const textMessage =
            result.body.messageData.textMessageData.textMessage;
          const newMessage = {
            message: textMessage,
            isMine: false,
            id: result.body.idMessage,
          };
          setChatMessageList((prev) => [...prev, newMessage]);
        }
      }
      await fetchMessage();
    } catch (e) {
      console.log(e);
      setTimeout(fetchMessage, 500);
    }
  }

  useEffect(() => {
    fetchMessage();
  }, []);

  async function onSendMessageHandler() {
    try {
      if (!textInputValue) return;
      const result = await chatApi.sendMessage(textInputValue, user, destinationId)
      if (result) {
        const newMessage = {
          message: textInputValue,
          isMine: true,
          id: result.idMessage,
        };
        setChatMessageList([...chatMessageList, newMessage]);
        setTextInputValue("");
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <ChatContainer>
      <Nav/>
      <Chats/>
      <CurrentChatWrap>
        <CurrentUserChat/>
        <ChatWindow chatMessageList={chatMessageList} />
        <TextInputForm
          onSendMessageHandler={onSendMessageHandler}
          onChangeHandler={onChangeHandler}
          value={textInputValue}
        />
      </CurrentChatWrap>
    </ChatContainer>
  );
};
