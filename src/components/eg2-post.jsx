import React, { Component } from 'react' 
// getPostData 已经可以直接使用
// 小提示：本系统可以直接 async/await

class Post extends Component {
  constructor() {
    super()
    this.state = { content: '' }
  }

  componentWillMount(){
    this._loadData()
  }

  async _loadaData(){
    this.setState({conent: '数据加载中。。。。'})
    const content = await getPostData()
    this.setState({ content })
  }

  render () {
    return (
      <div>
        <div className='post-content'>{ this.state.content }</div>
        <button onClick={() => {
            this._loadData()
          }}>刷新</button>
      </div>
    )
  }
}