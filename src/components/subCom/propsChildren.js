import React, { Component } from 'react'

class Card extends Component {
  render () {
    return (
      <div className='card'>
        <div className='card-content'>
          {this.props.content}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Card content={
    <div>
      <h2>React.js 小书</h2>
       <div>开源、免费、专业、简单</div>
      订阅：<input />
    </div>
  } />,
  document.getElementById('root')
)

//我们通过给Card组件传入一个content属性，这个属性可以传入任意的JSX结构。然后在Card内部会通过{this.props.content}把内容渲染到页面上。 

//这样明显太丑了，如果Card除了content以外还能传入其他属性的话，那么这些JSX
//和其他属性就会混在一起。很不好维护，如果能像下面的代码那样使用Card那也是极好的。

ReactDOM.render(
  <Card>
    <h2>React.js 小书</h2>
    <div>开源、免费、专业、简单</div>
    订阅：<input />
  </Card>,
  document.getELementById('root')
)

//如果组件标签也能像普通的HTML标签那样编写内嵌的结构，那就方便很多。
//实际上，React.js默认就支持这种写法，所有嵌套在组件中的JSX结构都可以在组件内部
//通过props.children获取到

class Card extends Component {
  render () {
    return (
      <div className='card'>
        <div className='card-content'>
          {this.props.children}
        </div>
      </div>
    )
  }
}
//React就是把我们嵌套的JSX元素一个个都放到数组当中
//然后通过props.children传给了Card。

//这种嵌套的内容成为了props.children数组的机制使得我们编写组件变得非常的灵活，甚至我们可以在组件内部把数组中的JSX元素安置在不同的地方。

class layout extends Component {
  render(){
    return (
      <div className="two-cols-layout">
        <div className="sidebar">
          {this.props.children[0]}
        </div>
        <div className="main">
          {this.props.children[1]}
        </div>
      </div>
    )
  }
}

//总结，使用自定义组件的时候，可以在其中嵌套JSX结构。嵌套的结构在组件内部
//都可以通过props.children获取到，这种组件编写方式在编写容器类型的组件当中非常有用
//而在实际的React.js项目中，我们几乎每天都要用这种方式来编写组件。