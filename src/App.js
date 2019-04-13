import React, { Component } from 'react';
import logo from './logo.svg';
import LoginComponent from './components/login/login-component.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header-left">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Welcome to Xpanxion Bank Application.
          </p>
        </header>
        <header className="App-header-right">
            <LoginComponent></LoginComponent>
        </header>
      </div>
    );
  }
}

export default App;
