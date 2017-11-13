import React from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardActions, CardHeader } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import PasswordInput from './base_elements/passwordInput';
import { push } from 'react-router-redux';

import actions from '../actions';

const styles = theme => ({
  card: {
    minWidth: 300,
    maxWidth: 600,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
    color: theme.palette.text.secondary,
  }
});

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    showPassword: false,
  }

  handleChange = name => e => this.setState({[name]: e.target.value})

  handleSignIn = user => () => {
    this.props.signIn(user).then(
      () => this.props.successRedirect()
    );
  }

  render() {
    const { classes } = this.props;
    const { email, password } = this.state;

    return (
      <Grid container justify="center">
        <Card className={classes.card}>
          <CardHeader title="Login"/>
          <CardContent>
              <Grid item xs={12}>
                <TextField
                  id="email"
                  label="Email"
                  className={classes.textField}
                  value={this.state.email}
                  onChange={this.handleChange('email')}
                />
              </Grid>
              <Grid item xs={12}>
                <PasswordInput handleChange={this.handleChange('password')} />
              </Grid>
          </CardContent>
          <CardActions>
            <Button raised onClick={this.handleSignIn({email, password})}>Войти</Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  signIn: PropTypes.func,
  history: PropTypes.object,
  successRedirect: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (user) => dispatch(actions.signIn(user)),
    successRedirect: () => dispatch(push('/')),
  };
};

export default compose(
  withStyles(styles, {name: 'Login'}),
  connect(null, mapDispatchToProps)
)(Login);
