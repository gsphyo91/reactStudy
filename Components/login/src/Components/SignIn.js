import React, { useState } from "react";
import { Container, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(25),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  wrapForm: {}
}));

const SignIn = ({handleSignIn}) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    console.log(email, password);
    handleSignIn(true);
  };

  return (
    <Container className={classes.container}>
      <form className={classes.wrapForm}>
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
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
        >
          Sign In
        </Button>
      </form>
    </Container>
  );
};

export default SignIn;
