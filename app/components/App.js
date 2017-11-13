import React from 'react';
import { footer } from '../styles/footer.scss';
import Routes from '../routes';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TopPanel from '../containers/layout/TopPanel';
import SideBar from '../containers/layout/SideBar';
import actions from '../actions';
import { push } from 'react-router-redux';

class App extends React.Component {
  componentWillMount = () => {
    this.props.checkAuthorization().then(
      () => {},
      () => this.props.redirectToLogin()
    );
  }

  render = () => {
    this.props.checkAuthorization().then(
      () => {},
      () => this.props.redirectToLogin()
    );

    return (
      <div>
        <TopPanel/>
        <SideBar/>
        <h1>Filter table</h1>
        { Routes }
        <footer className={footer} />
      </div>
    );
  }
}

App.propTypes = {
  checkAuthorization: PropTypes.func,
  redirectToLogin: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkAuthorization: () => dispatch(actions.checkAuthorization()),
    redirectToLogin: () => dispatch(push('/login')),
  };
};

export default connect(null, mapDispatchToProps)(App);
