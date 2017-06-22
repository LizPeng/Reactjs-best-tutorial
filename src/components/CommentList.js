import React, { Component } from 'react' 
import Comment from './Comment'

//v3
import PropTypes from 'prop-types'


class CommentList extends Component {
  //给CommenList加上defaultProps防止comment不传入的情况
  static defaultProps = {
    comments:[ ] 
  }
  ///////////////
  //v3
  static propTypes = {
    comments: PropTypes.array,
    onDeleteComment: PropTypes.func
  }
  handleDeleteComment(index) {
    if(this.props.onDeleteComment) {
      this.props.onDeleteComment(index)
    }
  }

  render () {
    return (
      <div>
        {this.props.comments.map((comment,i)=> 
          <Comment 
            comment={comment}
            key={i}
            index={i}
            onDeleteComment={this.handleDeleteComment.bind(this)}/> 
        )}
      </div>
    )
  }
}

export default CommentList