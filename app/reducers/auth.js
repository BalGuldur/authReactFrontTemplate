import * as types from '../actions/types';

const initialState = {
  currentUser: {},
  userToken: localStorage.getItem('userToken') || undefined
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER_TOKEN:
      return {...state, userToken: action.userToken};
    default:
      return state;
  }
};

export default auth;
