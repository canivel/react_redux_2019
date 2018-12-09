import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPosts = () => {
  return async dispatch => {
    const response = await jsonPlaceholder.get("/posts");

    dispatch({
      type: "FETCH_POSTS",
      payload: response.data
    });
  };
};

//condensed format without return but same as above
// export const fetchUser = id => async dispatch => {
//   const response = await jsonPlaceholder.get(`/users/${id}`);
//   //console.log(response.data);
//   dispatch({
//     type: "FETCH_USER",
//     payload: response.data
//   });
// };

//memoized version to fetch once and use it
export const fetchUser = id => dispatch => {
  _fetchUser(id, dispatch);
};

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);
  //console.log(response.data);
  dispatch({
    type: "FETCH_USER",
    payload: response.data
  });
});
