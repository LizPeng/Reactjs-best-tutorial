import React, { Component } from 'react' 
import Comment from './Comment'

class CommentList extends Component {
  //给CommenList加上defaultProps防止comment不传入的情况
  static defaultProps = {
    comments:[ ] 
  }
  render () {
    return (
      <div>
        {this.props.comments.map((comment,i)=> <Comment comment={comment} key={i}/> )}
      </div>
    )
  }
}

export default CommentList