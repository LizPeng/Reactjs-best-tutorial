import React, { Component } from 'react';
import CommentApp from './components/CommentApp';
import InputWithUserName from './components/inputWithLoadData'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        用户名：<InputWithUserName />
      </div>
    );
  }
}

export default App;
