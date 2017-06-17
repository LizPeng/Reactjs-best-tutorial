import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Title extends Component{

  handleClickOnTitle(e){
    console.log(e.target.innerHTML)
  }
  render() {
    return (
      //给h1加上onClick事件，然后表达式插入，这个表达式返回一个实例方法
      <h1 onClick={this.handleClickOnTitle.bind(this)}>React小书</h1>
      //这些on*的事件监听只能用在普通的HTML的标签上，而不能用在组件标签上。
      //如果你想在事件函数当中使用当前的实例，需要手动将实例方法bing到当前实例再传入给Reaact.js
    )
  }
}

class LikeButton extends Component {
  construntor(props) {
    super(props);
    this.state = {
      name: 'Tomy',
      isLiked: false
    }
  }
  handleClickOnLikeButton() {
    //setState由父类Component提供，当我们调用这个函数的时候，React会更新组件的状态，并且重新调用render方法，然后再把render方法所渲染的最小内容显示到页面上
    //当你调用setState的时候，React.js并不会马上修改state。而是把这个对象放到一个更新队列里面，稍后才会从队列当中把新的状态提取出来合并到state中，然后再触发组件更新
    //setState第二种使用方式，可以接受一个函数作为参数。React.js会把上一个setState的结果传入这个函数，你就可以使用该结果进行运算、操作，然后返回一个对象作为更新state的对象。
    this.setState((prevState) =>{
      return {count:0}
    }) 
    this.setState((prevState)=>{
      return { count: prevState.count + 1}//上一个setState返回的count是0，当前返回1
    })
    this.setState((prevState) => {
      return { count: prevState.count + 2}//上一个setState返回的count是1，当前返回3
    })
    //最后的结果this.state.count为3
  }

  render(){
    return (
      <button onClick={this.handleClickOnLikeButton.bind(this)}>
        {this.state.isLiked ? '点赞' : '点赞'}
      </button>
    )
  }
}