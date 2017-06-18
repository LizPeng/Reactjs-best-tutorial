import React, { Component } from 'react';
import CommentApp from './components/CommentApp';
import Execpre from './components/execpre';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<CommentApp />*/}
        <Execpre />
      </div>
    );
  }
}

export default App;
