import * as types from '../actions/types';

const initialState = {
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USERS:
      return action.users;
    case types.REMOVE_USER:
      return Object.keys(state || {}).filter(id => id !== action.user.id).reduce((prev, userId) => {
        return {...prev, [userId]: state[userId]};
      }, {});
    case types.SET_USER:
      return {...state, [action.user.id]: action.user};
    case types.ADD_USERS:
      return Object.keys(action.users || {}).reduce((prev, userId) => {
        return {...prev, [userId]: action.users[userId]};
      }, state);
    case types.REMOVE_USERS:
      return Object.keys(state || {}).filter(id => !Object.keys(action.users || {}).includes(id)).reduce((prev, userId) => {
        return {...prev, [userId]: state[userId]};
      }, {});
    default:
      return state;
  }
};

export default users;
