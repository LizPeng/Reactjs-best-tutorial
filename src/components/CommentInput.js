import React, { Component } from 'react' 

class CommentInput extends Component {
  //处理逻辑，初始化一个state来保存两个状态username,content
  constructor(){
    super()
    this.state = {
      username:'',
      content:''
    }
  }
  //通过event.target.value获取input中用户输入的内容
  handleUsernameChange(event){
    this.setState({ username:event.target.value })
  }

  handleContentChange(event){
    this.setState({content:event.target.value})
  }

  //发布按钮事件*****
  handleSubmit(){
    if(this.props.onSubmit){
      const {username, content} = this.state
      this.props.onSubmit({username, content})//CommentInput调用this.props.onSubmit(...)把数据传给CommentApp
    }
    this.setState({ content:'' })
  }

  render () {
    return (
      <div className="comment-input">
        <div className="comment-field">
          <span className="comment-field-name">用户名：</span>
          <div className="comment-field-input">
            <input 
              value={this.state.username} 
              onChange={this.handleUsernameChange.bind(this)} />
          </div>
        </div>
        <div className="comment-field">
          <div className="comment-field-name">评论内容：</div>
          <div className="comment-field-input">
            <textarea 
              value={this.state.content} 
              onChange={this.handleContentChange.bind(this)} />
          </div>
        </div>
        <div className="comment-field-button">
          <button 
            onClick={this.handleSubmit.bind(this)} >
            发布
          </button>
        </div>
      </div>
    )
  }
}

export default CommentInput