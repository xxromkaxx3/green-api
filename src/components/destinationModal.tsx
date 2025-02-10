import { FC, useState } from "react";
import { StyledButton, StyledDialog, StyledInput } from "./styled-components";

interface IDestinationProps {
  onSetDestination(destination: string): void
  open: boolean
}

export const DestinationModal: FC<IDestinationProps> = ({ onSetDestination, open }) => {
  const [destination, setDestination] = useState<string>('')

  const handleSetDestination = () => {
    onSetDestination(destination)
  }

  return (
    <StyledDialog open={open}>
      <StyledInput
        placeholder="Номер телефона 999 999 99 99"
        onChange={(e)=>setDestination(e.target.value)}
        value={destination}
        type="text"
      />      
      <StyledButton onClick={handleSetDestination}>save</StyledButton>
    </StyledDialog>
  );
};
