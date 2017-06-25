import React, { Component } from 'react'

//多层高阶组件：
export default (WrappedComponent, name) => {
  class NewComponent extends Component {
  //可以做很多自定义逻辑
    constructor () {
      super()
      this.state = { data: null}
    }
    //它会用传进来的props.data去服务器取数据
    componentWillMount () {
      ajax.get('/data/' +this.props.data, (data)=>{
          this.setState({data})
      })
    }

    render() {
      return <WrappedComponent data={this.state.data} />
    }
  }
  return NewComponent
}
