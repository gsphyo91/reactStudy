import React from "react";
import NaverLogin from "react-naver-login";

import { NAVER_CLIENT_ID } from "../Config/apiKey"

export const Naver = () => {
  const onSuccessLogin = (response) => {
    console.log(response);
  }

  const onFailureLogin = (response) => {
    console.log(response);
  }

  return (<NaverLogin
    clientId={NAVER_CLIENT_ID}
    callbackUrl="http://localhost:3000"
    onSuccess={onSuccessLogin}
    onFailure={onFailureLogin}
    render={
      (props) => <button onClick={props.onClick}>Naver Login</button>
    }
  />)
}