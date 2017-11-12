import * as types from '../actions/types';

const initalState = {
  leftNavIsOpen: false,
  topNavTitle: '',
  navItems: [
    {icon: 'list', title: 'Тест', link: '/test'},
    {icon: 'list', title: 'Тест2', link: '/test'}
  ]
};

const navigation = (state = initalState, action) => {
  switch (action.type) {
    case types.TOGGLE_SIDE_BAR:
      return {...state, leftNavIsOpen: !state.leftNavIsOpen};
    default:
      return state;
  }
};

export default navigation;
