import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';

import SignIn from './pages/Auth/SignIn';
import SignUp from './pages/Auth/SignUp';
import Register from './pages/Auth/Register';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route component={SignIn} path="/sign-in" />
        <Route component={SignUp} path="/sign-up" />
        <Route component={Register} path="/register" />
      </BrowserRouter>
    );
  }
}

export default App;
