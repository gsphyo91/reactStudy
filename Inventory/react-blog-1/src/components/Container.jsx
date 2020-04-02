import React from "react";
import { useSelector } from "react-redux";

import Main from "./Main";
import LoginPage from "./LoginPage";


const Container = () => {
  const logged = useSelector(state => state.logged);

  return (
    <>
      <p>React Blog</p>
      {logged ? <Main /> : <LoginPage />}
    </>
  )


}

export default Container;
