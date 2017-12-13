import React, { Component } from 'react';
import App from '../Component/header/App';
import Choose from '../Component/choose/choose';



class Main extends Component {
  render() {
    return (
      
      <div className="Main">
       <App/>
      <Choose/>
      
      </div>
    );
  }
}

export default Main;
