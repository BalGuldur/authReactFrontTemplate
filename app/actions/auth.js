import * as types from './types';

export function setToken(token) {
  localStorage.setItem('userToken', token);
  return {
    type: types.SET_USER_TOKEN,
    userToken: token
  };
}
export function testSetToken() {
  return function n(dispatch) {
    return dispatch(setToken('test'));
  };
}
export function checkAuthorization() {
  return function n() {
    return true;
  };
}
