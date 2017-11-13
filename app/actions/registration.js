import actions from '../actions';

export function regCompany({user, company}) {
  return function n(dispatch, getState) {
    console.log({user, company});
    const { api: {axios, rootPath} } = getState();
    // TODO: Move set axios headers to actions
    // TODO: Move rootPath axios to actions
    return axios.post(rootPath + '/users.json', {user, company}).then(
      response => {
        const { headers: { authorization } } = response;
        const responseUser = response.data;
        const userToken = authorization.split(' ')[1];
        dispatch(actions.setToken(userToken));
        dispatch(actions.setCurrentUser(responseUser));
        return Promise.resolve();
      },
      () => Promise.reject()
    ).catch(
      () => Promise.reject()
    );
  };
}
