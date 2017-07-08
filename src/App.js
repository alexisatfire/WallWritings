import React, { Component } from 'react';
import UserPost from './components/UserPost';

class App extends Component {

  constructor() {
    super();
    this.state = {
      somearray: [],
    };
  }

  addAction = () => {
    this.setState({ somearray: this.state.somearray.concat(<UserPost>default text</UserPost>) });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.addAction}>Add another message</button>
        {this.state.somearray.map((user, i) => (
          <div key={i}>{user}</div> // eslint-disable-line react/no-array-index-key
    ))}
      </div>
    );
  }
}

export default App;
