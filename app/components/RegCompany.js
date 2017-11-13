import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Card, { CardContent, CardActions, CardHeader } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import PasswordInput from './base_elements/passwordInput';

const styles = {};

class RegCompany extends React.Component {
  state = {
    email: '',
    password: '',
    passwordConfirmation: '',
    companyTitle: '',
    showPassword: false
  }

  handleChange = name => e => this.setState({[name]: e.target.value})

  render = () => {
    const { classes } = this.props;

    return (
      <Grid container justify="center">
        <Card className={classes.card}>
          <CardHeader title="Регистрация" />
          <CardContent>
            <Grid item xs={12}>
              <TextField
                id="compTitle"
                label="Название комп"
                className={classes.textField}
                value={this.state.companyTitle}
                onChange={this.handleChange('companyTitle')}
              />
            </Grid>
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
            <Button raised>Создать компанию</Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

RegCompany.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RegCompany);