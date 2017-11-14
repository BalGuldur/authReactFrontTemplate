import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';
import navigation from './navigation';
import auth from './auth';
import api from './api';
import users from './users';

const filter = (state = '', action) => {
  switch (action.type) {
    case types.FILTER:
      return action.filter;
    default:
      return state;
  }
};
const rootReducer = combineReducers({
  users,
  api,
  navigation,
  auth,
  filter,
  routing
});

export default rootReducer;
