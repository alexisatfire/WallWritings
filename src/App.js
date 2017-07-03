import React, { Component } from 'react';
import './App.css';
import UserPost from './components/UserPost';

class App extends Component {
  render() {
    return (
      <div className="App">
        Our app
        <UserPost>This is a commet</UserPost>
      </div>
    );
  }
}

export default App;
