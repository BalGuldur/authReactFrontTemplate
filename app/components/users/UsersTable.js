import PropTypes from 'prop-types';
import React from 'react';
import UserRow from './UserRow';

class UsersTable extends React.Component {
  renderUser = (userId) => {
    let user = this.props.users[userId];

    return <UserRow user={user} deleteUser={this.props.deleteUser} key={user.id}/>;
  }

  render = () => {
    return (
      <div>
        <h1>Пользователи</h1>
        {Object.keys(this.props.users || {}).map(this.renderUser)}
      </div>
    );
  }
}

UsersTable.propTypes = {
  users: PropTypes.object.isRequired,
  addUser: PropTypes.func.isRequired,
  deleteUser: PropTypes.func.isRequired,
};

export default UsersTable;
