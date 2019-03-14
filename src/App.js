import React, { Component } from 'react';
import './App.css';
import Button from './components/button.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button value="涟漪"/>
        <Button value="按钮"/>
      </div>
    );
  }
}

export default App;
