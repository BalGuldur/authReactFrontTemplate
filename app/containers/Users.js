import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import actions from '../actions';
import UsersTable from '../components/users/UsersTable';

class Users extends React.Component {
  componentWillMount = () => {
    this.props.fetchUsers();
  }

  render = () => {
    let { users, deleteUser, addUser } = this.props;

    return (
      <div>
        <UsersTable users={users} deleteUser={deleteUser} addUser={addUser} />
      </div>
    );
  };
}

Users.propTypes = {
  users: PropTypes.object,
  deleteUser: PropTypes.func,
  addUser: PropTypes.func,
  fetchUsers: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: user => dispatch(actions.deleteUser(user)),
    addUser: user => dispatch(actions.addUser(user)),
    fetchUsers: () => dispatch(actions.fetchUsers()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
