import * as navigation from './navigation';
import * as auth from './auth';
import * as registration from './registration';
import * as filterTable from './filterTable';
import * as users from './users';

const actions = {
  ...users,
  ...navigation,
  ...auth,
  ...registration,
  ...filterTable
};

export default actions;
