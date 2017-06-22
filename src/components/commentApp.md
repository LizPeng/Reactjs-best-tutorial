React.js认为所有状态都应该由React.js的state控制，只要类似于`<input /><textarea /> <select />` 这样的输入控件都被设置了value值，那么它们的值永远以被设置的值为准。值不变，value就不会变化。

监听 然后 setState

类似于`<input /><textarea /> <select />`这些元素的value值被React.js所控制、渲染的组件，在React.js当中被称为受控组件(Controlled Component)。对于用户可输入的控件，一般都可以让它们成为受控组件，这是React.js所推崇的做法。



## tips

不依赖DOM操作的组件启动的操作都可以放在componentWillMount中进行，所以给CommentInput添加componentWillMount的组件声明周期

组件的私有方法都用 `_` 开头，所有事件监听的方法都用 `handle` 开头。把事件监听方法传给组件的时候，属性名用 `on` 开头。

这样统一规范处理事件命名会给我们带来语义化组件的好处，监听（on）CommentInput的Submit事件，并且交给this去处理（handle)。这种规范在多人写作的时候也会非常方便。

另外，组件的内容编写顺序如下：

1. static开头的属性，如defaultProps 、propTypes
2. 构造函数, constructor
3. getter/setter
4. 组件声明周期
5. `_` 开头的私有方法
6. 事件监听方法,`handle*`
7. `render*`开头的方法，有时候`render()`方法里面的内容会分开到不同函数里面进行，这些函数都以`render*` 开头
8. render()方法


## 持久化评论

同样地，可以通过类似于用户名持久化的方式对评论列表内容进行持久化，让用户发布的评论在刷新页面以后依然可以存在。修改src/CommentApp.js