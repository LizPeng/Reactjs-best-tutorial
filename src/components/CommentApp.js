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
  ///////////////////////////
  //v2
  //我们增加了_loadComments和_saveComments分别用于加载和保存评论列表数据。
  //用户没次提交评论都会把评论列表数据保存一次，所以我们在handleSubmitComment调用_saveComments方法
  //而在componentWillMount中调用_loadComments方法在组件开始挂载的时候把评论数据加载出来setState到this.state中
  //组件就可以渲染从LocalStorage加载出来的评论的数据了
  
  componentWillMount () {
    this._loadComments()
  }
  _loadComments () {
    let comments = localStorage.getItem('comments')
    if(comments) {
      comments = JSON.parse(comments)
      this.setState({comments})
    }
  }
  _saveComments (comments)  {
    localStorage.setItem('comments',JSON.stringify(comments))
  }

  //在CommentApp中给CommentInput传入一个onSubmit属性
  //这个属性值是CommentApp自己的一个方法handleSubmitComment
  //这样CommentInput就可以调用this.props.onSubmit(...)把数据传给CommentApp
  handleSubmitComment (comment){
    if(!comment) return 
    if(!comment.username) return alert('请输入用户名')
    if(!comment.content) return alert('请输入评论内容')
    const comments = this.state.comments 
    comments.push(comment)
    this.setState({comments})
    this._saveComments(comments)
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