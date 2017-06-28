import React, { Component } from 'react'

class Index extends Component {
  //propsType验证组件props参数的作用类似，它验证的是getChildContext返回的对象
  //这个必须写
  static childContextTypes = {
    themeColor: PropTypes.string
  }

  //往state里面初始化一个themeColor状态
  constructor () {
    super()
    this.state = { themeColor: 'red'}
  }

  /////////////////////
  //如果我们要改颜色，只要在Index里面setState就可以了，如下
  componentWillMount () {
    this.setState({themeColor:'green'})
  }

  //设置context的过程
  getChildContext () {
    return { themeColor: this.state.themeColor }
  }

  render (){
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}

class Header extends Component {
  render () {
    return (
      <div>
        <h2>This is header</h2>
        <Title />
      </div>
    )
  }
}

class Main extends Component {
  render () {
    return (
      <div>
        <h2>This is main</h2>
        <Content />
      </div>
    )
  }
}

class Title extends Component {
  //子组件获取context状态
  //子组件要获取context里面的内容，就必须写contextTypes来声明和验证你需要获取的状态和类型
  //它也是必写的，如果不写就无法获取context里面的状态。
  //Title想获取themeColor，它是一个字符串，我们就在contextTypes里面进行声明
  //声明以后我们就可以通过this.context.themeColor获取到在Index防止的值为red的themeColor
  static contextTypes = {
    themeColor: PropTypes.string
  }

  render () {
    retrun ( //使用context
      <h1 style={{ color: this.context.themeColor}} >React.js小书标题</h1>
    )
  }
}

class Content extends Component {
  render () {
    return (
      <div>
        <h2>React.js小书内容</h2>
      </div>
    )
  }
}

React.DOM.render(
  <Index />,
  document.getElementById('root')
)