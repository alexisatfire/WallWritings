import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super();
    this.state = {
      somearray: []
    }
  }

  addAction = () => {
    this.setState({ somearray: this.state.somearray.concat(<UserPost>default text</UserPost>)});
    }

  render() {
    return (
      <div className="App">
        <button onClick={this.addAction}>Add another message</button>
        {this.state.somearray.map((user, index) => (
        <div key={index}>{user}</div>
    ))}
      </div>
    );
  }
}

export default App;
