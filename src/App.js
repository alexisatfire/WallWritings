import React, { Component } from 'react';
import UserPost from './components/UserPost';
import UploadImg from './components/UploadImg';

class App extends Component {

  constructor() {
    super();
    this.state = {
      postArray: [],
    };
  }

  addAction = () => {
    this.setState({ postArray:
      this.state.postArray.concat(<UserPost>default text</UserPost>),
    });
  }

  removeAction = (i) => {
    const x = this.state.postArray.length;
    this.setState({ postArray:
      this.state.postArray.splice(i, x - 1),
    });
  }

  eachMessage = (user, i) => {
    return (
      <div id="userMessage" key={i}>
        <UploadImg />
        {user}
      </div>
    );
  }

  render() {
    return (
      <div>
        <button onClick={this.addAction}>Add another message</button>
        <button onClick={this.removeAction}>Remove message</button><br />
        <div className="entrySet">
          {this.state.postArray.map(this.eachMessage)}
        </div>
      </div>
    );
  }
}

export default App;
