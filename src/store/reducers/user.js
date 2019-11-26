import { FETCHING_USER, FETCHED_USER, USER_ERROR } from '../actions';

const userState = {
  user: null,
  isFetchingUser: false,
  userError: null,
};

export default (state = userState, action) => {
  switch (action.type) {
    case FETCHING_USER:
      return { ...state, user: null, isFetchingUser: true, userError: null };
    case FETCHED_USER:
      return { ...state, user: action.user, isFetchingUser: false, userError: null };
    case USER_ERROR:
      return { ...state, user: null, isFetchingUser: false, userError: "failed to fetch a user." };
    default:
      return state;
  }
};