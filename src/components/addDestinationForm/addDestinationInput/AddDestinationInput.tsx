import { ChangeEvent } from "react";

interface Props {
  value: string;
  onChangeHandler: (value: ChangeEvent<HTMLInputElement>) => void;
}

export const AddDestinationInput: React.FC<Props> = ({
  value,
  onChangeHandler,
}) => {
  return (
    <input
      placeholder="Номер телефона 999 999 99 99"
      onChange={onChangeHandler}
      value={value}
      type="text"
    />
  );
};
