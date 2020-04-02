import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { ToggleIsRegister } from "../actions/register"

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    dispatch(ToggleIsRegister(false));
  }

  const handleFormChange = (e) => {
    if(e.target.name === "email"){
      setEmail(e.target.value);
    }else if(e.target.name === "password"){
      setPassword(e.target.value);
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  }

  return (
    <>
      <button onClick={handleRegister}>Login</button>
      <p>Register Page</p>
      <form onSubmit={onSubmit}>
        <label>
          ID:
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleFormChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleFormChange}
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </>
  )
}

export default RegisterPage;