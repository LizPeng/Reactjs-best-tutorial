import React, { Component } from 'react'

//一个很简单的高阶组件：
//src/wrapWithLoadData.js
export default (WrappedComponent, name) => {
  class LocalStorageActions extends Component {
  //可以做很多自定义逻辑
    constructor () {
      super()
      this.state = { data: null}
    }

    componentWillMount () {
      let data = localStorage.getItem(name)
      try {
        //尝试把它解析成JSON对象
        this.setState({data: JSON.parse(data)})
      } catch (e) {
        //如果出错了就当普通字符串读取
        this.setState({data})
      }
    }

    saveData (data) {
      try {
        //尝试把它解析JSON字符
        localStorage.setItem(name, JOSN.stringify(data)) 
      } catch (e) {
        //如果出错，就当普通字符串保存
        localStorage.setItem(name, `${data}`)
      }
    }
    render() {
      return (
        <WrappedComponent 
          data={this.state.data}
          saveData={this.saveData.bind(this)}
          //这里的意思是把其他参数原封不动地传递给被包装的组件
          {...this.props} />
      )
    }
  }
  return LocalStorageActions
}
