import React from "react";
import FacebookLogin from "react-facebook-login";

import {FACEBOOK_CLIENT_ID} from "../Config/apiKey";

export const Facebook = () => {
  const onSuccessLogin = (response) => {
    console.log(response);
  }

  const onFailureLogin = (response) => {
    console.log(response);
  }

  return (
    <FacebookLogin 
      appId={FACEBOOK_CLIENT_ID}
      callback={onSuccessLogin}
      onFailure={onFailureLogin}    
      fields="name,email,picture"
      size="medium"
      textButton="Facebook Login"
    />
  )
}