import { ChangeEvent } from "react";
import { StyledInput } from "../../styled-components";

interface Props {
  value: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const TextInput: React.FC<Props> = ({ value, onChangeHandler }) => {
  return (
    <StyledInput
      type="text"
      onChange={onChangeHandler}
      value={value}
      className="text-input"
    />
  );
};
