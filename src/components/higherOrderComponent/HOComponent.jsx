import React, { Component } from 'react'

//一个很简单的高阶组件：
export default (WrappedComponent, name) => {
  class NewComponent extends Component {
  //可以做很多自定义逻辑
    construnctor () {
      super()
      this.state = { data: null}
    }

    componentWillMount () {
      let data = localStorage.getItem(name)
      this.setState({data})
    }

    render() {
      return <WrappedComponent data={this.state.data} />
    }
  }
  return NewComponent
}