import React, { Component } from 'react';

class Computer extends React.Component {
  constructor() {
    super();
    this.state = {
      status: 'off',
      showContent: '显示器关了'
    }
  }
  handleTagger() {
    let sta;
  	let content;
  	if(this.state.status == 'on') {
  		sta = 'off'; 
  		content = '显示器关了';
  	}
  	else {
  		sta = 'on'; 
  		content = '显示器亮了';
  	} 
    this.setState({
      status: sta,
      showContent: content
    })
  }
  render () {
    return (
      <div>
        <button onClick={() => this.handleTagger()}>开关</button>
        <Screen showContent={this.state.showContent} />
      </div>
    )
  }
}

class Screen extends React.Component {
  static defaultProps = {
    showContent:"无内容"
  }
  render () {
    const showContent = this.props.showContent;
    return (
      <div className='screen'>
        {showContent}
      </div>
    )
  }
}

export default Computer 

