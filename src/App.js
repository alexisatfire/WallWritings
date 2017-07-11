import React, { Component } from 'react';
import UserPost from './components/UserPost';
import ProfilePic from './components/ProfilePic';
import UploadImg from './components/UploadImg';

class App extends Component {

  constructor() {
    super();
    this.state = {
      somearray: [],
    };
  }

  addAction = () => {
    this.setState({ somearray:
      this.state.somearray.concat(<UserPost>default text</UserPost>) });
  }

  render() {
    return (
      <div className="App">
        <UploadImg />
        <button onClick={this.addAction}>Add another message</button>
        {this.state.somearray.map((user, i) => (
          <div key={i}>{user}</div> // eslint-disable-line react/no-array-index-key
        ))}
      </div>
    );
  }
}

export default App;
