import React from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import actions from '../../actions';
import { push } from 'react-router-redux';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

class TopPanel extends React.Component {
  panelTitle = () => {
    const { navItems } = this.props;
    const { pathname } = this.context.router.route.location;
    const currentItem = navItems.filter(item => item.link === pathname)[0];
    return currentItem && currentItem.title || '';
  }

  handleLogout = () => () => {
    this.props.signOut();
    this.props.redirectAfterLogout();
  }

  render = () => {
    const { classes, toggleLeftBar } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="contrast" aria-label="Menu" onClick={toggleLeftBar}>
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              {this.panelTitle()}
            </Typography>
            <Button color="contrast" onClick={this.handleLogout()}>Logout</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  };
}

TopPanel.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleLeftBar: PropTypes.func,
  navItems: PropTypes.array,
  currentUser: PropTypes.object,
  signOut: PropTypes.func,
  redirectAfterLogout: PropTypes.func,
};

TopPanel.contextTypes = {
  router: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    navItems: state.navigation.navItems,
    currentUser: state.auth.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleLeftBar: () => dispatch(actions.toggleSideBar()),
    signOut: () => dispatch(actions.signOut()),
    redirectAfterLogout: () => dispatch(push('/login')),
  };
};

export default compose(
  withStyles(styles, {name: 'TopPanel'}),
  connect(mapStateToProps, mapDispatchToProps)
)(TopPanel);
