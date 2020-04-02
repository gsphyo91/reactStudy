import { combineReducers } from "redux";

import logged from "./reducer_logged";
import register from "./reducer_register";
import userInfo from "./reducer_userInfo";

const rootReducer = combineReducers({
  logged: logged,
  isRegister: register,
  userInfo: userInfo
});

export default rootReducer;
