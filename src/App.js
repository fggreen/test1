import React, { Component } from 'react';
import logo from './antimage_full.png';
import './App.css';
import  Test from './Test';
import logoq from './logo.svg';

class App extends Component {

  render() {

    return (
      <div className="App">
      <img width="300" height="188" class="img" scr={logo} />
      <img width="300" height="188" class="img" scr={logoq} />
        <Test></Test>
      </div>
    );
  }
}

export default App;
