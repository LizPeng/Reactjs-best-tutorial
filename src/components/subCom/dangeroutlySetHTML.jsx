import React, { Component } from 'react';

class Editor extends Component {
  constructor() {
    super()
    this.state = {
      content: '<h1>React.js 小书</h1>'
    }
  }

  render () {
    return (
      <div className='editor-wrapper'>
        {this.state.content}
      </div>
    )
  }
}


//表达式插入并不会把一个<h1>渲染到页面，而是把它的文本形式渲染了。那要怎么才能做到设置动态HTML结构的效果呢？
//React.js提供了一个属性dangeroutlySetInnerHTML，可以让我们设置动态元素的innerHTML:

render() {
  return (
    <div
      className="editor-wrapper"
      dangerouslySetInnerHTML={{__html: this.state.content}} />
  )
}
//需要给dangerouslySetInnerHTML传入一个对象，这个对象的__html属性值就相当于innerHTML，这样我们就可以动态渲染元素的innerHTMl结构了。
