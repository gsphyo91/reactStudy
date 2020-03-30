import {combineReducers} from 'redux';
import reducer_signIn from "./reducer_signIn";

const rootReducer = combineReducers({
  signIn: reducer_signIn
});

export default rootReducer;