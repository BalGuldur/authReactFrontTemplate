import actions from '../actions';

export function regCompany({user, company}) {
  return function n(dispatch, getState) {
    const {api: {axios, rootPath}} = getState();
    return axios.post(rootPath + '/users.json', {user, company}).then(
      response => {
        const respToken = response.headers.authorization.split(' ')[1];
        const respUser = response.data;
        return dispatch(actions.setUser(respUser, respToken));
      }
    );
  };
}
