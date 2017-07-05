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
    this.setState({editing: false});
  }

  renderForm = () => {
    return(
      <div className="commentContainer">
        <form>
          <textarea defaultValue={this.props.children}></textarea><br />
          <button onClick={this.post} className="button-posted">Post</button>          
        </form>
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
    if(this.state.editing){
      return this.renderForm();
    } else {
      return this.renderMessage();
    }
  }
}

export default UserPost;
