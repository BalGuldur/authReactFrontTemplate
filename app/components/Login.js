import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent, CardActions, CardHeader } from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import PasswordInput from './base_elements/passwordInput';

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

  render() {
    const { classes } = this.props;

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
            <Button raised>Войти</Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
