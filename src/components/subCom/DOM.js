import React, { Component } from 'react' 

class AutoFocusInput extends Component {
  componentDidMount() {
      this.input.focus()
  }

  render() {
    return (
      <input ref={(input) => this.input = input } />
		)
  }
}

class Post extends Component {

	onClick(){
		console.log(this.tabDOM.clientHeight)
	}
  render () {
    return (
				<p ref={ dom => {this.tabDOM = dom}}
					 onClick={this.onClick.bind(this)}>
					{this.props.content}
				</p>
		)
  }
}

const Post = props => {
  return (
    <p ref={ p => {this.p = p} } onClick={ () => console.log(this.p.clientHeight) }>
        {props.content}
    </p>
  )
}

export default Post 