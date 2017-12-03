import React from 'react';
//import logo from './logo.svg';
import './App.css';
import ButtonLink from '../nav/nav';
const App = () => (

  <div className="App">
    <header className="App-header">
      <div class="ui massive fixed inverted borderless menu">
        <div class="ui container">
          <a class="header item" href="/">Project Name</a>
          <a class="active item" href="/">Home</a>
          <a class="item" href="/">About</a>
          <a class="item" href="/">Contact</a>


          <div class="right menu">
            <div class="ui form"><br />
              <div class="inline fields">
                <div class="field">

                  <input placeholder="Email" type="text" />
                </div>
                <div class="field">
                  <input placeholder="Password" type="text" />
                </div>
                <div class="field">
                  <button class="ui green button">
                    Sign in
                </button>
                  <a href="/SignUp"> <button class="ui green button" >
                    Sign Up
               </button></a>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />

      <h1 className="App-title">Welcome to Website</h1>

      <ButtonLink />
    </header>

  </div>
)

export default App;
