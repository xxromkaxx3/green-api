import { StyledForm } from "../styled-components";
import { SendMessageButton } from "./sendMessageButton";
import { TextInput } from "./textInput";
import { ChangeEvent } from "react";

interface Props {
  value: string;
  onChangeHandler: (value: ChangeEvent<HTMLInputElement>) => void;
  onSendMessageHandler: () => void;
}

export const TextInputForm: React.FC<Props> = ({
  value,
  onChangeHandler,
  onSendMessageHandler,
}) => {
  return (
    <StyledForm>
      <TextInput onChangeHandler={onChangeHandler} value={value} />
      <SendMessageButton onClickHandler={onSendMessageHandler} />
    </StyledForm>
  );
};
