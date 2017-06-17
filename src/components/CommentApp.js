import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
  constructor(){
    super()
    this.state = {
      comments:[]
    }
  }
  
  //在CommentApp中给CommentInput传入一个onSubmit属性
  //这个属性值是CommentApp自己的一个方法handleSubmitComment
  //这样CommentInput就可以调用this.props.onSubmit(...)把数据传给CommentApp
  handleSubmitComment (comment){
    if(!comment) return 
    if(!comment.username) return alert('请输入用户名')
    if(!comment.content) return alert('请输入评论内容')
    this.state.comments.push(comment)
    this.setState({
      comments:this.state.comments
    })
  }

  render () {
    return (
      <div className="wrapper">
        <CommentInput 
          onSubmit={this.handleSubmitComment.bind(this)}/>
        <CommentList comments={this.state.comments}/>
      </div>
    )
  }
}

export default CommentApp