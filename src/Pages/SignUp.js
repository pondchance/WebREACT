import React, { Component } from 'react';
import App from '../Component/header/App';
import SignupForm from '../Component/SignUpForm/SignUpForm'
import './Login.css'

class SignUp extends Component {
  render() {
    return (
      <div className="Login">
       <App/>
        <SignupForm/>
      </div>
    );
  }
}

export default SignUp
