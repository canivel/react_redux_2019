import { combineReducers } from "redux";
import { reducer as reducerForm } from "redux-form";
import authReducer from "./authReducer";
import streamReducer from "./streamReducer";

export default combineReducers({
  form: reducerForm,
  auth: authReducer,
  streams: streamReducer
});
