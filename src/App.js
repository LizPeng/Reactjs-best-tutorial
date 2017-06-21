import React, { Component } from 'react';
import CommentApp from './components/CommentApp';
import BlackBorderContainer from './components/eg3-children';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BlackBorderContainer>
          <div className='name'>My Name：Lucy</div>
          <p className='age'>
            My Age：<span>12</span>
          </p>
        </BlackBorderContainer>
      </div>
    );
  }
}

export default App;
