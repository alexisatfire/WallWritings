import React, { Component } from 'react';
import defaultPic from "./default.png";

class ProfilePic extends Component {
  render() {
    return (
      <div className="ProfilePic">
        <img src={defaultPic} alt="" height="60" width="60"/>
      </div> 
    );
  }
}

export default ProfilePic;
