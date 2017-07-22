import React, { Component } from 'react';

class UserPost extends Component {

  constructor() {
    super();
    this.state = {
      editing: true,
      newText3: '',
    };
  }

  edit = () => {
    this.setState({ editing: true });
  }

  save = () => {
    this.setState({ editing: false });
  }

  duplicateDiv = () => {
    if (this.newText3.length > 1) {
      this.setState({ textAreaDuplicate: this.newText.value });
    }
  }

  renderBreak = () => {
    const userIn = this.newText.value;
    let stringToSplit = [];
    stringToSplit = userIn.split('');
    let newText2 = '';
    console.log(stringToSplit);
    for (let i = 0; i < stringToSplit.length; i += 1) {
      if (stringToSplit[i].length > 30) {
        newText2 = newText2 + stringToSplit[i].slice(0, 15) + '-\n'
         + stringToSplit[i].slice(16, stringToSplit[i].length);
      } else if (i > 5) {
        newText2 = newText2 + stringToSplit[i] + '\n';
      } else {
        newText2 = newText2 + stringToSplit[i];
      }
      console.log(newText2);
    }
    this.setState({ newText3: newText2 });
    console.log(this.newText3);
  }

  renderForm = () => (
    <div className="commentContainer">
      <textarea ref={(c) => { this.newText = c; }} onChange={this.renderBreak} />
      <br />
      <button onClick={this.save} className="button-saved">Save</button>
    </div>
  )

  renderMessage = () => (
    <div className="commentContainer">
      <div ref={(d) => { this.oldText = d; }}><p className="commentText">{this.newText.value}</p></div>
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
