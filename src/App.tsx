import { ChangeEvent, useState } from "react";
import { RegistrationForm, AddDestinationForm, MainPage } from "./components";
import "./start.css";
import "./App.css";

export interface User {
  idInstance: string;
  apiTokenInstance: string;
  isAuthorized: boolean;
}

function App() {
  const [user, setUser] = useState<User>({
    idInstance: "",
    apiTokenInstance: "",
    isAuthorized: false,
  });
  const [destination, setDestination] = useState({
    destinationId: "",
    isAdded: false,
  });

  function onUserChangeHandler(val: ChangeEvent<HTMLInputElement>) {
    if (val.target.className === "id-instance-input") {
      setUser({ ...user, idInstance: val.target.value });
    } else {
      setUser({ ...user, apiTokenInstance: val.target.value });
    }
  }

  function onAuthorizedChange() {
    setUser({ ...user, isAuthorized: !user.isAuthorized });
  }

  function addDestinationInputChange(value: ChangeEvent<HTMLInputElement>) {
    setDestination({ ...destination, destinationId: value.target.value });
  }

  function addDestinationClickButton() {
    setDestination({ ...destination, isAdded: !destination.isAdded });
  }

  if (!user.isAuthorized) {
    return (
      <RegistrationForm
        value={user}
        onUserChangeHandler={onUserChangeHandler}
        onAuthorizedChange={onAuthorizedChange}
      />
    );
  } else if (!destination.isAdded) {
    return (
      <AddDestinationForm
        onChangeHandler={addDestinationInputChange}
        value={destination.destinationId}
        onClickHandler={addDestinationClickButton}
      />
    );
  } else {
    return <MainPage destinationId={destination.destinationId} user={user} />;
  }
}

export default App;
