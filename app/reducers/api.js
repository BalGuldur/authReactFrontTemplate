// import * as types from '../actions/types';
import axios from 'axios';

const apiProdLink = 'http://lidscatch.skyspace.cloud:80';
const apiLocalLink = 'http://localhost:3000';

const initialState = {
  axios: axios,
  rootPath: process.env.NODE_ENV === 'development' ? apiLocalLink : apiProdLink
};
const api = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default api;
