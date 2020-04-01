import React from "react";
import KakaoLogin from "react-kakao-login";

import {KAKAO_CLIENT_ID} from "../Config/apiKey";

export const Kakao = () => {
  const onSuccessLogin = (response) => {
    console.log(response);
  }

  const onFailureLogin = (response) => {
    console.log(response);
  }
  
  return (
    <KakaoLogin
      jsKey={KAKAO_CLIENT_ID}
      onSuccess={onSuccessLogin}
      onFailure={onFailureLogin}
      useDefaultStyle
      getProfile
      buttonText="Kakao Login"
    />
  )
}