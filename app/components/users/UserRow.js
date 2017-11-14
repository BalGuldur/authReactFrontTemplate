import PropTypes from 'prop-types';
import React from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

const styles = {};

const UserRow = (props) => {
  const { classes, user, deleteUser } = props;

  return (
    <div>
      <div>{user.email}</div>
      <Button raised className={classes.button} onClick={deleteUser.bind(this, user)}>
        Удалить
      </Button>
    </div>
  );
};

UserRow.propTypes = {
  user: PropTypes.object.isRequired,
  deleteUser: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserRow);
