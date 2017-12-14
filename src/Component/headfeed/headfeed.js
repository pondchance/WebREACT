import React, { Component } from 'react'
import './headfeed.css'
import { Input, Menu } from 'semantic-ui-react'
class HeadFeed extends Component {

    
  render() {
    return (
        <div class="ui borderless huge menu">
        <div class="ui container grid">
          <div class="computer only row">
            <a class="header item" href="/Feed">PS POST<i class="small chat icon"></i></a>
            <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
            <div class="right menu">
            
            <a class="active item" href="/Profile">USERNAME</a>
            <a class="item">Log out</a>
           </div>
           </div>
      </div>
      </div>
    );
  }
}
export default HeadFeed;
