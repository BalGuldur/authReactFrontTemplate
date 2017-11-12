import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { FormControl } from 'material-ui/Form';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import IconButton from 'material-ui/IconButton';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';

const styles = {};

class passwordInput extends React.Component {
  state = {
    showPassword: false
  }

  handleClickShowPassword = () => this.setState({showPassword: !this.state.showPassword})

  handleMouseDownPassword = event => event.preventDefault();

  handleChange = e => this.props.handleChange && this.props.handleChange(e)

  render = () => {
    const{ showPassword } = this.state;
    let { value } = this.props;

    return (
      <FormControl>
        <InputLabel htmlFor="password">Пароль</InputLabel>
        <Input
          id="password"
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={this.handleChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={this.handleClickShowPassword}
                onMouseDown={this.handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    );
  }
}

passwordInput.propTypes = {
  handleChange: PropTypes.func,
  value: PropTypes.string,
};

export default withStyles(styles)(passwordInput);
