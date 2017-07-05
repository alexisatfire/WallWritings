import React, { Component } from 'react';
import './App.css';
import UserPost from './components/UserPost';

class App extends Component {

  constructor() {
    super();
    this.state = {
      somearray: []
    }
  }

  addAction = () => {
    this.setState({somearray: this.state.somearray.concat(<UserPost>default text</UserPost>)});
    console.log(this.somearray);
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
