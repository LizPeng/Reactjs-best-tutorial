import React, { Component } from 'react' 

class Header extends Component {
  constructor(){
    super()
    console.log('construct')
  }

  componentWillMount () {
    console.log('component will mount')
  }

  componentDidMount () {
    console.log('component did mount')
  }
  
  componentWillUnmount() {
    console.log('will unMount')
  }
  render () {
    console.log('render')
    return (
      <div>
        <h1 className="title">React 组件的声明周期</h1>
      </div>
    )
  }
}

class Index extends Component {
  constructor() {
    super()
    this.state = {
      isShowHeader: true
    }
  }

  handleShowOrHide () {
    this.setState({
      isShowHeader: !this.state.isShowHeader
    })
  }

  render () {
    return (
      <div>
        {this.state.isShowHeader ? <Header /> : null}
        <button onClick={this.handleShowOrHide.bind(this)}>
          显示或者隐藏标题
        </button>
      </div>
    )
  }
}

class Clock extends Component {
  constructor() {
    super()
    this.state ={
      date: new Date()
    }
  }

  componentWillMount() {
    //给Clock启动定时器
    this.timer = setInterval(()=>{
      this.setState({date: new　Date()})
    }, 1000)
  }
  
  //数据的清理
  componentWillUnmount() {
    clearInterval(this.timer)
  }
  render(){
    return (
      <div>
        <h1>
          <p>现在的时间是</p>
          {this.state.date.toLocaleTimeString()}
        </h1>
      </div>
    )
  }
}

export default Clock 