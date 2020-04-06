import { combineReducers } from "redux";

import logged from "./reducer_logged";
import isRegister from "./reducer_register";
import userInfo from "./reducer_userInfo";
import postView from "./reducer_postView"

const rootReducer = combineReducers({
  logged,
  isRegister,
  userInfo,
  postView
});

export default rootReducer;
