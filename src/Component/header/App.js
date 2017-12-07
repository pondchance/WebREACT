import React, { Component } from 'react'
import './App.css';




class App extends Component {

    
  render() {
    return (

      <div className="App">

        <div class="ui massive fixed inverted borderless menu" >
          <div class="ui container">
            <a class="header item" href="/">PS POST</a> 

            <div class="right menu">
              <div class="ui form"><br />
                <div class="inline fields">

                  <div class="field">
                    <input placeholder="Username" type="text" name="username"
                   />
                  </div>

                  <div class="field">
                    <input placeholder="Password" type="text" name="password" 
                   />
                  </div>

         



                  <div class="field">
                    <button type='submit' class="ui green button">
                      Log in
                </button>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

        


      </div>
    );
  }
}
export default App;
