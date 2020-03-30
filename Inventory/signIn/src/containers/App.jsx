import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {onSignOut} from "../actions/signInAction";
import SignIn from "./SignIn";
import { Button } from "@material-ui/core";

function App({isSignIn, token, onSignOut}) {
  const [storageToken, setToken] = useState("");
  useEffect(() => {
    if(window.localStorage.getItem('token')){
      setToken(window.localStorage.getItem('token'));
    }
  }, [storageToken]);
  return isSignIn ? (
    <>
      <p>{storageToken}</p>
      <Button variant="contained" color="secondary" onClick={onSignOut}>로그아웃</Button>
    </>
  ) : (
    <SignIn />
  );
}

function mapStateToProps(state){
  return {
    isSignIn: state.signIn.isSignIn,
    token: state.signIn.token,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({onSignOut}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
