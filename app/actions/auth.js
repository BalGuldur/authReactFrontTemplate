import * as types from './types';

export function setUser(user, token) {
  return {
    type: types.SET_USER,
    token: token,
    user: user,
  };
}
export function signIn(user) {
  return function n(dispatch, getState) {
    const {api: {axios, rootPath}} = getState();
    axios.defaults.headers.common = {};
    return axios.post(rootPath + '/users/sign_in.json', {user}).then(
      response => {
        const respToken = response.headers.authorization.split(' ')[1];
        const respUser = response.data;
        return dispatch(setUser(respUser, respToken));
      }
    );
  };
}
export function signOut() {
  return function n(dispatch, getState) {
    // console.log(getState());
    const {api: {axios, rootPath}, auth: {userToken}} = getState();
    axios.defaults.headers.common = {
      'Authorization': 'Bearer ' + userToken
    };
    return Promise.all([
      dispatch(setUser(undefined, undefined)),
      axios.delete(rootPath + '/users/sign_out.json')
    ]);
  };
}
export function checkAuthorization() {
  return function n(dispatch, getState) {
    const {api: {axios, rootPath}, auth: {userToken}} = getState();
    axios.defaults.headers.common = {
      'Authorization': 'Bearer ' + userToken
    };
    return axios.post(rootPath + '/check.json');
  };
}
