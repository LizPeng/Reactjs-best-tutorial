e# React.js的context

这一节来介绍永远用不上的---context。但是了解它对于了解接下来要讲解的React-redux很有好处，所以可以简单了解一下它的概念和作用。

在过去很长一段时间里面，React.js的context一直被视为一个不稳定的，危险的，可能会被去掉的特性而不被官网文档所记载。但是全世界的第三方库都在使用这个特性，直到React.js的v0.14.1版本，context才被官方文档所记录。

除非你觉得自己的React.js水平已经比较炉火纯情了，否则你永远不要使用context。就像你学JavaScript的时候，总是会被提醒不要用全局变量一样，React.js的context其实像就是组件树上某颗子树的全局变量。

想象一下我们有这么一颗组件树：

![](http://huzidaha.github.io/static/assets/img/posts/85C81DFF-F71E-4B2B-9BAB-AF285F3DB1DB.png)

假设现在找个组件树代表的应用是用户可以自主换主题色的，每个子组件会根据主题色的不同调整自己的字体颜色或者背景颜色."主题色"这个玩意是所有组件共享的状态，根据我们在前端应用状态广利-状态提升中所提到的，需要把这个状态提升到根节点的Index上，然后把这个状态通过props一层层传递下去：

![](http://huzidaha.github.io/static/assets/img/posts/03118DDD-60E3-469A-AB78-5FBE57425E30.png)

假设原来的主题色是绿色，那么Index上保存的就是this.state = {themeColor: 'green'}。如果需要改变主题色，可以直接通过this.setState({ themeColor:'red'})来进行。这样整颗组件树就会重新渲染，子组件也就可以根据重新传进来的props.themeColor来调整自己的颜色。

但这里的问题也非常明显的，我们需要把themeColor这个状态一层层手动地从组件树往下传，每层都需要写props.themeColor。如果我们的组件树层次很深的话，这样维护起来简直是灾难。

如果这颗组建树能够全局共享这个状态就好了，我们要的时候就去取这个状态，不用手动地传：

![](http://huzidaha.github.io/static/assets/img/posts/3BC6BDFC-5772-4045-943B-15FBEC28DAC0.png)



就像这样，Index把state.themeColor放到某个地方，这个地方是每个Index的子组件都可以访问到的。当某个子组件需要的时候就直接去那个地方拿就好了，而不需要一层层地通过props来获取。不管组件树的层次有多深，任何一个组件都可以直接到这个公共的地方提取themeColor状态

React.js的context就是这么一个东西，某个组件只要往自己的context里面放了某些状态，这个组件之下的所有子组件都直接访问这个状态而不需要通过中间组件的传递。一个组件的context只有它的子组件能够访问，它的父组件是不能访问到底，你可以理解每个组件的context就是瀑布的源头，只能往下流不能往上飞。


## 总结

一个组件可以通过getChildContext方法返回一个对象，这个对象就是子树的context，提供context的组件必须提供childContextTypes作为context的声明和验证。

如果一个组件设置了context，那么它的子组件都可以直接访问到里面的内容，它就像这个组件为根的子树的全局变量。任意深度的子组件都可以通过contextTypes来声明你想要的context里面的那些状态，然后可以通过this.context访问到那些状态。

context打破了组件和组件之前通过props传递数据的规范，极大地增强了组件之前的耦合性。而且，就如全局变量一样，context里面的数据能被随意接触就能被随意修改，每个组件都能够改context里面的内容会导致程序的运行不可预料。

