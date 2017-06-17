import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Dog extends Component {
  constructor () {
    super()
    /* TODO */
    this.state={
      isRunning:false,
      isBarking:false,
    }
  }
  
  bark () {
   this.setState({ isBarking: true })
   setTimeout( ()=> this.setState({isBarking:false}, 20))
  }
  
  run () {
    /* TODO */
    this.setState({ isRunning: true })
   setTimeout( ()=> this.setState({isRunning:false}, 20))
  }
  
  onClick(){
    this.bark();
    this.run();
  }
  render () {
    return (<div onClick={this.onClick.bind(this)}>DOG</div>)
  }
}

export default Dog 