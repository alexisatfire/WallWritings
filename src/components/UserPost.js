import React, { Component } from 'react';

class UserPost extends Component {

  constructor() {
    super();
    this.state = {
      editing: true,
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
          <textarea ref="newText"></textarea><br />
          <button onClick={this.post} className="button-posted">Post</button>
      </div>
    );
  }

  renderMessage = () => {
    return(
      <div className="commentContainer">
        <div className="commentText" >{this.refs.newText.value}</div>
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
