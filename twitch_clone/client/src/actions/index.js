import streams from "../apis/streams";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FEATCH_STREAM,
  FEATCH_STREAM_LIST,
  DELETE_STREAM,
  EDIT_STREAM
} from "./types";
import history from "../history";

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const createStream = formValues => {
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await streams.post("/streams", { ...formValues, userId });

    dispatch({ type: CREATE_STREAM, payload: response.data });
    history.push("/");
  };
};

export const fetchStreamList = () => {
  return async dispatch => {
    const response = await streams.get("/streams");

    dispatch({ type: FEATCH_STREAM_LIST, payload: response.data });
  };
};

export const fetchStream = id => {
  return async dispatch => {
    const response = await streams.get(`/streams/${id}`);

    dispatch({ type: FEATCH_STREAM, payload: response.data });
  };
};

export const deleteStream = id => {
  return async dispatch => {
    await streams.get(`/streams/${id}`);

    dispatch({ type: DELETE_STREAM, payload: id });
  };
};

export const editStream = (id, formValues) => {
  return async dispatch => {
    const response = await streams.patch(`/streams/${id}`, formValues);

    dispatch({ type: EDIT_STREAM, payload: response.data });
    history.push("/");
  };
};
