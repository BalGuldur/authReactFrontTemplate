import * as types from './types';

export function setUsers(users) {
  return {
    type: types.SET_USERS,
    users: users
  };
}
export function removeUser(user) {
  return {
    type: types.REMOVE_USER,
    user: user
  };
}
export function removeUsers(users) {
  return {
    type: types.REMOVE_USERS,
    users: users
  };
}
export function setUser(user) {
  return {
    type: types.SET_USER,
    user: user
  };
}
export function addUsers(users) {
  return {
    type: types.ADD_USERS,
    users: users
  };
}
export function fetchUsers() {
  return function n(dispatch, getState) {
    const {api: {rootPath, axios}, auth: {userToken}} = getState();
    axios.defaults.headers.common = {
      'Authorization': 'Bearer ' + userToken
    };
    return axios.get(rootPath + '/api/users.json').then(
      response => {
        const { users } = response.data;
        return dispatch(setUsers(users));
      }
    );
  };
}
export function addUser(user) {
  return function n(dispatch, getState) {
    const {api: {rootPath, axios}, auth: {userToken}} = getState();
    axios.defaults.headers.common = {
      'Authorization': 'Bearer ' + userToken
    };
    return axios.post(rootPath + '/api/users.json', {user}).then(
      response => {
        const { users } = response.data;
        return dispatch(addUsers(users));
      }
    );
  };
}
export function deleteUser(user) {
  return function n(dispatch, getState) {
    const {api: {rootPath, axios}, auth: {userToken}} = getState();
    axios.defaults.headers.common = {
      'Authorization': 'Bearer ' + userToken
    };
    return axios.delete(rootPath + '/api/users/' + user.id + '.json').then(
      response => {
        const { users } = response.data;
        return dispatch(removeUsers(users));
      }
    );
  };
}
