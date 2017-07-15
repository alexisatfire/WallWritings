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
      this.state.postArray.concat(<UserPost>default text</UserPost>)
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.addAction}>Add another message</button>
        <ul>
        {this.state.postArray.map((user, i) => (
          <li className="userEntry" key={i}><UploadImg />{user}</li> // eslint-disable-line react/no-array-index-key
        ))}
        </ul>
      </div>
    );
  }
}

export default App;
