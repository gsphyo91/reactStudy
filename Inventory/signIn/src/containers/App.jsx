import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onSignIn, onSignOut } from "../actions/signInAction";
import { requestAPI } from "../Components/api";

import SignIn from "./SignIn";

import { Button } from "@material-ui/core";

function App() {
  const dispatch = useDispatch();
  const isSignIn = useSelector(state => state.signIn.isSignIn);
  const token = useSelector(state => state.signIn.token);

  const getAuth = useCallback(async (token) => {
    try {
      const { status } = await requestAPI.auth(token);
      if (status === 200) {
        dispatch(onSignIn(token));
      } else {
        window.localStorage.removeItem('token');
        dispatch(onSignOut());
      }
    } catch{
      window.localStorage.removeItem('token');
      dispatch(onSignOut());
    }


  }, [dispatch]);

  const handleSignOut = () => {
    window.localStorage.removeItem('token');
    dispatch(onSignOut());
  };

  useEffect(() => {
    const localToken = window.localStorage.getItem('token');
    if (localToken !== null) {
      getAuth(localToken);
    } else {
      dispatch(onSignOut());
    }
  }, [getAuth, dispatch]);

  return isSignIn ? (
    <>
      <p>{token}</p>
      <Button variant="contained" color="secondary" onClick={handleSignOut}>로그아웃</Button>
    </>
  ) : (
      <SignIn />
    );
}

export default App;
