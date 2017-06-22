import React, { Component } from 'react' 
import PropTypes from 'prop-types'

class CommentInput extends Component {
  static propTypes = {
    onSubmit: PropTypes.func
  }
  //处理逻辑，初始化一个state来保存两个状态username,content
  constructor(){
    super()
    this.state = {
      username:'',
      content:''
    }
  }
  //////////////////////////////
  //v2阶段添加代码
  componentDidMount(){
    this.textarea.focus()
  }
  //把用户的输入内容保存到LocalStorage当中
  componentWillMount () {
    this._loadUsername();
  }
  _loadUsername () {
    const username = localStorage.getItem('username')
    if(username) {
      this.setState({username})
    }
  }
  _saveUsername (username) {
    localStorage.setItem('username',username)
  }

  handleUsernameBlur(event){
    //在这个方法中我们把用户输入的内容传给了_saveUsername私有方法
    //所有私有方法都以 _ 开头。_saveUsername会设置LocalStorage中的username字段，
    //用户名就持久化了。这样就相当于每当用户输入完用户名以后（输入框失去焦点的时候）
    //都会把用户名自动保存一次

    this._saveUsername(event.target.value)
  }
  //////////////////////////
  //v1阶段添加代码
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
      //v2显示评论发布时间
      this.props.onSubmit({
        username:this.state.username,
        content:this.state.content,
        createdTime: +new Date()
      })//CommentInput调用this.props.onSubmit(...)把数据传给CommentApp
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
              onBlur={this.handleUsernameBlur.bind(this)}
              onChange={this.handleUsernameChange.bind(this)} />
          </div>
        </div>
        <div className="comment-field">
          <div className="comment-field-name">评论内容：</div>
          <div className="comment-field-input">
            <textarea 
              ref = {(textarea)=> this.textarea= textarea}
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