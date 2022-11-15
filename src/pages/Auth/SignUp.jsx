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
import { FacebookLoginButton, AppleLoginButton, GoogleLoginButton } from 'react-social-login-buttons';

import '../../assets/styles/SignIn.css';

class SignUp extends React.Component {
  render() {
    return (
      <div className="sign-in-main">
        <div className="sign-up-label">Create Your Account</div>
        <div className="sign-up-form">
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

          <FormControlLabel control={<Checkbox />} label="Agree to Terms & Conditions" className="sign-in-form-check" />

          <Button
            sx={{ borderRadius: '20px', backgroundColor: 'black' }}
            variant="contained"
            className="sign-in-form-button">
            Sign up
          </Button>
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
              <AppleLoginButton onClick={() => alert('Hello')} />
            </div>
          </div>
        </div>
        <div className="sign-in-register">
          <div className="sign-in-register-1">Already have an account? </div>
          <div className="sign-in-register-2"> Sign in</div>
        </div>
      </div>
    );
  }
}

export default SignUp;
