import React from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {onSignOut} from "../actions/signInAction";
import SignIn from "./SignIn";
import { Button } from "@material-ui/core";

function App({isSignIn, email, password, onon}) {
  return isSignIn ? (
    <>
      <p>{email}</p>
      <p>{password}</p>
      <Button variant="contained" color="secondary" onClick={onon}>로그아웃</Button>
    </>
  ) : (
    <SignIn />
  );
}

function mapStateToProps(state){
  return {
    isSignIn: state.signIn.isSignIn,
    email: state.signIn.email,
    password: state.signIn.password
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({onon: onSignOut}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
