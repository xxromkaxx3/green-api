import { FC, useState } from "react";
import { IUser } from "../types/user";
import { StyledButton, StyledDialog, StyledInput } from "./styled-components";

interface IAuthProps {
  onSetAuth(user: IUser): void
  open: boolean
}

export const AuthModal: FC<IAuthProps> = ({onSetAuth, open}) => {
  const [idInstance, setIdInstance] = useState<string>('')
  const [apiTokenInstance, setApiTokenInstance] = useState<string>('')
  
  const handleSelectAuth = async () => {
    onSetAuth({idInstance, apiTokenInstance})
  }

  return (
    <StyledDialog open={open}>
      <StyledInput
        placeholder="IdInstance"
        className="id-instance-input"
        onChange={(e)=>setIdInstance(e.target.value)}
        value={idInstance}
        type="text"
      />
      <StyledInput
        placeholder="ApiTokenInstance"
        className="api-token-instance-input"
        type="password"
        onChange={(e)=>setApiTokenInstance(e.target.value)}
        value={apiTokenInstance}
      />
      <StyledButton onClick={handleSelectAuth}>Подтвердить пользователя</StyledButton>
    </StyledDialog>
  )
}