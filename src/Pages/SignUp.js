import React, { Component } from 'react';
import Header from '../Component/header/App';
import SignupForm from '../Component/SignUpForm/SignUpForm'
import './Login.css'

class SignUp extends Component {
  render() {
    return (
      <div className="Login">
       <Header/>
        <SignupForm/>
      </div>
    );
  }
}

export default SignUp
