import React from "react";
import { useDispatch } from "react-redux";

import { Logout } from "../actions/logged";

const Main = () => {
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(Logout());
  }

  return (
    <>
      <button onClick={onLogout}>Logout</button>
    </>
  )
}

export default Main;