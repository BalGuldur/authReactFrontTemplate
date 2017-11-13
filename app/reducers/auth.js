import * as types from '../actions/types';

const localStorePrefix = 'react_auth_template__';

const initialState = {
  currentUser: {},
  lsPrefix: localStorePrefix,
  userToken: localStorage.getItem(localStorePrefix + 'userToken') || undefined
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
