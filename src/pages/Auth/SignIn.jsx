import React from 'react';
import {
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Button,
  InputAdornment,
  Input,
  Box,
  FormControl,
  IconButton,
  InputLabel,
  FilledInput,
} from '@mui/material';
import { Email, Lock, Visibility, Facebook, Google, Apple } from '@mui/icons-material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { FacebookLoginButton, TwitterLoginButton, GoogleLoginButton } from 'react-social-login-buttons';

import '../../assets/styles/SignIn.css';

class SignIn extends React.Component {
  render() {
    return (
      <div className="sign-in-main">
        <div className="sign-in-label">Login to Your Account</div>
        <div className="sign-in-form">
          <FormControl variant="standard" className="sign-in-form-input">
            <Input
              id="input-with-icon-adornment"
              sx={{ padding: '12px' }}
              startAdornment={
                <InputAdornment position="start">
                  <Email />
                </InputAdornment>
              }
              placeholder="Email"
            />
          </FormControl>

          <FormControl variant="standard" className="sign-in-form-input">
            <Input
              id="input-with-icon-adornment"
              sx={{ padding: '12px' }}
              type="password"
              startAdornment={
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    // onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end">
                    {/* {values.showPassword ? <VisibilityOff /> : <Visibility />} */}
                    <Visibility />
                  </IconButton>
                </InputAdornment>
              }
              placeholder="Password"
            />
          </FormControl>

          <FormControlLabel control={<Checkbox />} label="Remember Me" className="sign-in-form-check" />

          <Button
            sx={{ borderRadius: '20px', backgroundColor: 'black' }}
            variant="contained"
            className="sign-in-form-button">
            Sign in
          </Button>

          <div className='"sign-in-form-forgot'>Forgot the password ?</div>
        </div>
        <div className="sign-in-social">
          <div className="sign-in-social-1">or continue with</div>
          <div classname="sign-in-social-2" style={{ display: 'flex' }}>
            <div classname="sign-in-social-2-fb">
              <FacebookLoginButton onClick={() => alert('Hello')} />
            </div>
            <div classname="sign-in-social-2-g">
              <GoogleLoginButton onClick={() => alert('Hello')} />
            </div>
            <div classname="sign-in-social-2-a">
              <TwitterLoginButton onClick={() => alert('Hello')} />
            </div>
          </div>
        </div>
        <div className="sign-in-register">
          <div className="sign-in-register-1">Don't have an account? </div>
          <div className="sign-in-register-2"> Sign up</div>
        </div>
      </div>
    );
  }
}

export default SignIn;
