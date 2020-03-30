import React, { useState } from "react";
import SignIn from "./Components/SignIn";
import { Button } from "@material-ui/core";

function App() {
  const [isSignIn, setIsSignIn] = useState(false);

  const handleSignIn = () => {
    setIsSignIn(true);
  };

  const handleSignOut = () => {
    setIsSignIn(false);
  };

  return isSignIn ? (
    <Button onClick={handleSignOut}>로그아웃</Button>
  ) : (
    <SignIn handleSignIn={handleSignIn} />
  );
}

export default App;
