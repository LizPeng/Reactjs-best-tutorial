import React, { Component } from 'react';

const users = [
  { username: 'Jerry', age: 21, gender: 'male' },
  { username: 'Tomy', age: 22, gender: 'male' },
  { username: 'Lily', age: 19, gender: 'female' },
  { username: 'Lucy', age: 20, gender: 'female' }
]

//ES6自带的map
// class Index extends Component {
//   render () {
//     return (
//       <div>
//         {users.map((user)=> {
//           return (
//             <div>
//               <div>姓名 : {user.username}</div>
//               <div>年龄 : {user.age}</div>
//               <div>性别 : {user.gender}</div>
//             </div>
//           )
//         })}  
//       </div>
//     )
//   }
// }


//这里把负责展示用户数据的JSX结构抽离成一个组件User
//并且通过props把user数据作为组件的配置参数穿进去；
//这样改写Index就非常清晰了，看一眼就知道负责渲染users列表，而用的组件时User
class  User extends Component {
  render () {
    const { user } = this.props
    return (
      <div>
        <div>姓名 : {user.username}</div>
        <div>年龄 : {user.age}</div>
        <div>性别 : {user.gender}</div>
        <hr />
      </div>
    )
  }
}

//对于表达式套数组罗列到页面上的元素
//都要为每个元素加上key属性
//这个key属性必须是每个元素为唯一的标识
//一般来说，key的值可以直接后台数据返回的id，因为后台的id都是唯一的
//但这个例子，每个user没有id可以用 ，可以用循环计数i作为key
class Index extends Component {
  render () {
    return (
      <div>
         {users.map( (user, i) => <User key={i} user={user} /> )}
      </div>
    )
  }
}

const lessons = [
  { title: 'Lesson 1: title', description: 'Lesson 1: description' },
  { title: 'Lesson 2: title', description: 'Lesson 2: description' },
  { title: 'Lesson 3: title', description: 'Lesson 3: description' },
  { title: 'Lesson 4: title', description: 'Lesson 4: description' }
]

class Lesson extends Component {
  render () {
    const { lesson } = this.props
    return (
      <div onClick={()=>console.log(`${this.props.index} - ${lesson.title}`)}>
        <h1>{lesson.title}</h1>
        <p>{lesson.description}</p>
      </div>
    )
  }
}

class LessonsList extends Component {
  render () {
    return (
      <div>
        {lessons.map( (lesson,i)=> { 
          return  <Lesson lesson={lesson} index={i} key={i} />
        })}
      </div>
    )
  }
}


export default LessonsList 