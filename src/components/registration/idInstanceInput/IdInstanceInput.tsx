import { ChangeEvent } from "react";
import { User } from "../../../App";

interface IdInstanceInput {
  onChangeHandler: (val: ChangeEvent<HTMLInputElement>) => void;
  value: User;
}

export const IdInstanceInput: React.FC<IdInstanceInput> = ({
  onChangeHandler,
  value,
}) => {
  return (
    <input
      placeholder="IdInstance"
      className="id-instance-input"
      onChange={onChangeHandler}
      value={value.idInstance}
      type="text"
    />
  );
};
