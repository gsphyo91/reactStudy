import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { SetUserInfo } from '../actions/userInfo';
import { Login } from '../actions/logged';
import {ToggleIsRegister} from "../actions/register";
import RegisterPage from "./RegisterPage";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const isRegister = useSelector(state => state.isRegister);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(SetUserInfo(email, password));
    dispatch(Login());
  }

  const handleRegister = () => {
    dispatch(ToggleIsRegister(true));
  }

  return isRegister ? <RegisterPage /> : (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          ID:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
        <label>
          PW:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </label>
        <button type="submit">Login</button>
      </form>
      <button onClick={handleRegister}>Register</button>
    </>
  )
}

export default LoginPage;