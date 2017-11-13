import * as navigation from './navigation';
import * as auth from './auth';
import * as registration from './registration';
import * as filterTable from './filterTable';

const actions = {
  ...navigation,
  ...auth,
  ...registration,
  ...filterTable
};

export default actions;
