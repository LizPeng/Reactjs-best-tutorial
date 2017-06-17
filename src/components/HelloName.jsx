import React, { Component } from 'react';

//函数式组件（无状态）
const HelloWorld1 = ({name1})=>{
	const sayHi = (event) =>alert(`Hello ${name1}`)
		return (
			<div onClick={sayHi}>Hello {name1}</div>
	)
}

HelloWorld1.propTypes ={
	name: React.PropTypes.string.isRequired
}

//class
class HelloWorld extends Component {
  constructor(props) {
    super(props)
  }
    
  sayHi () {
    alert(`Hello ${this.props.name}`)
  }
    
  render () {
	  return (
	      <div onClick={this.sayHi.bind(this)}>Hello {this.props.name}</div>
	  )
  }
}
export default HelloWorld