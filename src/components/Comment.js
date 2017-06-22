import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Comment extends Component {
  ///////////////
  //v2
  //在评论列表上显示评论
  ////////////////////
  //v3
  //comment和commentApp之间隔了一个CommentList,
  //Comment无法直接跟CommentApp打交道，只能通过CommentList来转发删除评论的消息
  //修改Comment组件，让它可以把删除的消息传递到上一层；
  static propTypes = {
    comment: PropTypes.object.isRequired,
    onDeleteComment: PropTypes.func,
    index:PropTypes.number
  }
  constructor(){
    super()
    this.state = {timeString: ''}
  }
  componentWillMount() {
    this._updateTimeString()
    //启动定时器，每5秒调用一下
    this._timer = setInterval(
      this._updateTimeString.bind(this), 5000
    )
  }

  componentWillUnmount() {
    clearInterval(this._timer)
  }

  //v3
  handleDeleteComment() {
    if(this.props.onDeleteComment) {
      this.props.onDeleteComment(this.props.index)
    }
  }

  _updateTimeString() {
    const comment = this.props.comment
    const duration = (+Date.now() - comment.createdTime )/1000
    this.setState({
      timeString: duration > 60
        ? `${Math.round(duration/60)} 分钟前`
        : `${Math.round(Math.max(duration, 1))} 秒前`
    })
  }
  //v3
  //在替换代码之前要手动地把这些HTML标签进行转义
  //前5个标签实际上是把类似于< >这种内容转义一下，最后一行才是实现功能的代码
  _getProcessedContent(content) {
    return content
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;")
      .replace(/`([\S\s]+?)`/g,'<code>$1</code>')
  }
  render () {
    /////////////////////////
    //v3
    //给评论组件增加删除评论
    const { comment } = this.props
    return (
      <div className='comment'>
        <div className='comment-user'>
          <span>{comment.username} </span>：
        </div>
        <p dangerouslySetInnerHTML={{
          __html: this._getProcessedContent(comment.content)
        }}/>
        <span className="comment-createdtime">
          {this.state.timeString}
        </span>
        <span className="comment-delete"> 
          删除
        </span>
        <span 
          onClick={this.handleDeleteComment.bind(this)} className="comment-delete">
          删除
        </span>
      </div>
    )
  }
}

export default Comment