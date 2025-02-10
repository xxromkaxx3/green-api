import { useState } from "react";
import "./start.css";
import { IUser } from "./types/user";
import { Chat } from "./pages";
import { AuthModal, DestinationModal } from "./components";
import styled from "styled-components";

const StyledWrap = styled.div({
  height: '100vh',
  width: '100%',
  backgroundColor: '#222c32',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

interface IUserAuth extends IUser {
  isAuthorized: boolean
}

function App() {
  const [user, setUser] = useState<IUserAuth>({
    idInstance: "",
    apiTokenInstance: "",
    isAuthorized: false
  });

  const [destination, setDestination] = useState({
    destinationId: "",
    isAdded: false,
  });

  const onAuth = (user: IUser) => {
    if (user.apiTokenInstance && user.idInstance){
      setUser({...user, isAuthorized: true})
    }
  }

  function handleSetDestination(destinationId: string) {
    setDestination({ destinationId, isAdded: !!destinationId });
  }
  
  return (
    <StyledWrap>
      {user.isAuthorized && destination.isAdded &&
        <Chat destinationId={destination.destinationId} user={user} />
      }
      {<>
        <AuthModal
          onSetAuth={onAuth}
          open={!user.isAuthorized} />
        <DestinationModal
          onSetDestination={handleSetDestination}
          open={user.isAuthorized && !destination.isAdded} />
      </>}
    </StyledWrap>
  )
}

export default App;
