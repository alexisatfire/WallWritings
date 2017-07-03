import React, { Component } from 'react';
import ProfilePic from './ProfilePic';

class UserPost extends Component {
 
  constructor() {
    super();
    this.state = {
      editing: false
    }
  }

  edit = () => {
    this.setState({editing: true});
  }

  post = () => {
    console.log('zalupa');
    this.setState({editing: false});
  }

  renderForm = () => {
    return(
      <div className="commentContainer">
        <textarea defaultValue={this.props.children}></textarea>
        <button onClick={this.post} className="button-posted">Post</button>
      </div>
    );
  }

  renderMessage = () => {
    return(
      <div className="commentContainer">
        <div className="commentText">{this.props.children}</div>
        <button onClick={this.edit}>Edit</button>
      </div>
    );
  }

  render() {
    // var editm;
    // if(this.state.editing){
    //   editm = 'zala'
    // } else {
    //   editm = 'zzzzz'
    // }
    // return this.renderMessage();
    //
    if(this.state.editing){
      return this.renderForm();
    } else {
      return this.renderMessage();
    }
  }
}

export default UserPost;
