import _ from "lodash";

import {
  FEATCH_STREAM,
  FEATCH_STREAM_LIST,
  EDIT_STREAM,
  CREATE_STREAM,
  DELETE_STREAM
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FEATCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case FEATCH_STREAM_LIST:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};
