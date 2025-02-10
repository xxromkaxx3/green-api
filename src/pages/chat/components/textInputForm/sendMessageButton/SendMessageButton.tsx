import { PaperPlaneRight } from "@phosphor-icons/react";
import { StyledSendButton } from "../../styled-components";

interface Props {
  onClickHandler: () => void;
}

export const SendMessageButton: React.FC<Props> = ({ onClickHandler }) => {
  return (
    <StyledSendButton onClick={onClickHandler}>
      <PaperPlaneRight size={25} weight="fill" color="#7f8b94" />
    </StyledSendButton>
  );
};
