import React from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
// import Button from 'material-ui/Button';
// import List from 'material-ui/List';
import List, { ListItem, ListItemText } from 'material-ui/List';
// import Divider from 'material-ui/Divider';
// import { mailFolderListItems, otherMailFolderListItems } from './tileData';

import actions from '../../actions';

const styles = {
  list: {
    width: 250,
  },
  listFull: {
    width: 'auto',
  },
};

class SideBar extends React.Component {
  clickLink = (link) => this.context.router.history.push(link)

  renderSideItem = (item, index) =>
    <ListItem button key={index}>
      <ListItemText primary={item.title} onClick={this.clickLink.bind(this, item.link)}/>
    </ListItem>

  renderSideList = () =>
      <div className={this.props.classes.list}>
        <List>
          {this.props.navItems.map(this.renderSideItem)}
        </List>
      </div>;

  render = () => {
    let { opened, toggleLeftBar } = this.props;

    return (
      <Drawer open={opened} onRequestClose={toggleLeftBar}>
        <div
          tabIndex={0}
          role="button"
          onClick={toggleLeftBar}
          onKeyDown={toggleLeftBar}
        >
          {this.renderSideList()}
        </div>
      </Drawer>
    );
  };
}

SideBar.propTypes = {
  classes: PropTypes.object.isRequired,
  opened: PropTypes.bool.isRequired,
  toggleLeftBar: PropTypes.func,
  navItems: PropTypes.array,
  router: PropTypes.object,
};

SideBar.contextTypes = {
  router: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    opened: state.navigation.leftNavIsOpen,
    navItems: state.navigation.navItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleLeftBar: () => dispatch(actions.toggleSideBar())
  };
};

// export default SideBar;
export default compose(
  withStyles(styles, {name: 'SideBar'}),
  connect(mapStateToProps, mapDispatchToProps)
)(SideBar);
