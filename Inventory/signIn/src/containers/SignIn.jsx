import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { onSignIn } from "../actions/signInAction"

import { requestAPI } from "../Components/api";

import { Container, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(12),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  wrapForm: {}
}));

const SignIn = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const encodePassword = Buffer.from(password, `utf8`).toString("base64");

    try {
      const { data } = await requestAPI.signIn(email, encodePassword);
      const localStorage = window.localStorage;
      localStorage.setItem('token', data);
      dispatch(onSignIn(data));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className={classes.container}>
      <form className={classes.wrapForm} onSubmit={handleSubmit}>
        <TextField
          id="email"
          label="Email Address"
          name="email"
          type="email"
          variant="outlined"
          size="small"
          margin="normal"
          required
          fullWidth
          autoFocus
          autoComplete="email"
          value={email}
          onChange={handleEmailChange}
        />
        <TextField
          id="password"
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          size="small"
          margin="normal"
          required
          fullWidth
          autoComplete="current-password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign In
        </Button>
      </form>
    </Container>
  );
};

export default SignIn;
