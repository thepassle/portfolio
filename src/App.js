import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Projects from './Projects';
import Profile from './Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Projects />
      </div>
    );
  }
}

export default App;
