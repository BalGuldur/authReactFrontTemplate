import * as types from './types';

export function setToken(token) {
  return function n(dispatch, getState) {
    const { auth: {lsPrefix}} = getState();
    localStorage.setItem(lsPrefix + 'userToken', token);
    return {
      type: types.SET_USER_TOKEN,
      userToken: token
    };
  };
}
export function setCurrentUser(user) {
  return {
    type: types.SET_CURRENT_USER,
    user: user
  };
}
export function testSetToken() {
  return function n(dispatch) {
    return dispatch(setToken('test'));
  };
}
export function checkAuthorization() {
  return function n(dispatch, getState) {
    const { api: {axios, rootPath}, auth: {userToken} } = getState();
    // TODO: Move set axios headers to actions
    // TODO: Move rootPath axios to actions
    axios.defaults.headers.common = {
      'Authorization': 'Bearer ' + userToken
    };
    return axios.post(rootPath + '/check.json').then(
      () => Promise.resolve(),
      () => Promise.reject()
    ).catch(
      () => Promise.reject()
    );
  };
}
export function signIn(user) {
  return function n(dispatch, getState) {
    const { api: {axios, rootPath}} = getState();
    axios.defaults.headers.common = {};
    // TODO: Move rootPath axios to actions
    return axios.post(rootPath + '/users/sign_in.json', {user}).then(
      response => {
        const { headers: { authorization } } = response;
        const responseUser = response.data;
        const userToken = authorization.split(' ')[1];
        dispatch(setToken(userToken));
        dispatch(setCurrentUser(responseUser));
        return Promise.resolve();
      },
      () => Promise.reject()
    ).catch(
      () => Promise.reject()
    );
  };
}
export function signOut() {
  return function n(dispatch, getState) {
    const { api: {axios, rootPath}, auth: {userToken}} = getState();
    // TODO: Move set axios headers to actions
    // TODO: Move rootPath axios to actions
    axios.defaults.headers.common = {
      'Authorization': 'Bearer ' + userToken
    };
    dispatch(setToken(undefined));
    dispatch(setCurrentUser(undefined));
    axios.delete(rootPath + '/users/sign_out.json');
    return Promise.resolve();
  };
}