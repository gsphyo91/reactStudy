import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

import { GOOGLE_CLIENT_ID } from "../Config/apiKey";

export const Google = () => {
  const [logged, setLogged] = useState(false);
  const [profile, setProfile] = useState({
    name: "",
    imageUrl: ""
  });

  const onSuccessLogin = response => {
    console.log(response);
    setProfile({
      name: response.profileObj.name,
      imageUrl: response.profileObj.imageUrl
    });
    setLogged(true);
  }
  const onFailureLogin = response => {
    console.log(response);
  }
  const onLogout = response => {
    console.log(response);
    setLogged(false);
  }

  return logged ? (
    <>
      <img src={profile.imageUrl} alt="profile" />
      <p>{profile.name}</p>
      <GoogleLogout clientId={GOOGLE_CLIENT_ID} buttonText="Logout" onLogoutSuccess={onLogout} />
    </>
  ) : (
      <GoogleLogin
        clientId={GOOGLE_CLIENT_ID}
        buttonText="Google Login"
        onSuccess={onSuccessLogin}
        onFailure={onFailureLogin}
        cookiePolicy={'single_host_origin'}
      />
    )
}