import * as navigation from './navigation';
import * as auth from './auth';
import * as filterTable from './filterTable';

const actions = {
  ...navigation,
  ...auth,
  ...filterTable
};

export default actions;
