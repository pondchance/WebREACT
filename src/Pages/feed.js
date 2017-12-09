import React, { Component } from 'react';
import FeedExampleBasic from '../Component/Post/Post'
import HeadFeed from '../Component/headfeed/headfeed';

class Feed extends Component {
  render() {
    return (
      
      <div className="headfeed">
       <HeadFeed/>
     <FeedExampleBasic />
      </div>
    );
  }
}

export default Feed;