import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { footer } from '../styles/footer.scss';
import Routes from '../routes';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TopPanel from '../containers/layout/TopPanel';
import SideBar from '../containers/layout/SideBar';

import actions from '../actions';

const App = (props) => {
  const { checkAuthorization } = props;

  if (checkAuthorization()) {
    return (
      <div>
        <TopPanel/>
        <SideBar/>
        <h1>Filter table</h1>
        { Routes }
        <footer className={footer}>
            <Link to="/">Filterable Table</Link>
            <Link to="/about">About</Link>
        </footer>
      </div>
    );
  }

  return <Redirect to="/regCompany" />;
};

App.propTypes = {
  checkAuthorization: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkAuthorization: () => dispatch(actions.checkAuthorization())
  };
};

export default connect(null, mapDispatchToProps)(App);
