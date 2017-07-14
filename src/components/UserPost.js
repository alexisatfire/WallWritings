import React, { Component } from 'react';

class UserPost extends Component {

  constructor() {
    super();
    this.state = {
      editing: true,
    };
  }

  edit = () => {
    this.setState({ editing: true });
  }

  save = () => {
    this.setState({ editing: false });
  }



  renderForm = () => (
    <div className="commentContainer">
      <textarea ref={(c) => { this.newText = c; }} />
      <br />
      <button onClick={this.save} className="button-saved">Save</button>

    </div>
  )

  renderMessage = () => (
    <div className="commentContainer">
      <div className="commentText" >{this.newText.value}</div>
      <button onClick={this.edit}>Edit</button>
    </div>
  )

  render() {
    if (this.state.editing) {
      return this.renderForm();
    }
    return this.renderMessage();
  }
}

export default UserPost;
