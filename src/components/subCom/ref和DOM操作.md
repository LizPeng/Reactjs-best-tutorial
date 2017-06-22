# ref和React.js中的DOM操作

React.js并不能完全满足所有DOM操作需求，有些时候我们还是需要和DOM打交道。比如说你想进入页面以后自动focus到某个输入框，你需要调用input.focus()的DOM API，比如说你想动态获取某个DOM元素的尺寸来做后续的动画，等等。

React.js当中提供了ref属性来帮助我们获取已经挂在的元素的DOM节点，你可以给某个JSX元素加上ref属性：

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

可以看到我们给input元素加了一个ref属性，这个属性值是一个函数。当input元素在页面上挂载完成后，React.js就会调用这个函数，并且把这个挂载以后的DOM节点传给这个函数。在函数中我们把这个DOM元素设置为组件实例的一个属性，这样以后我们就可以通过this.input获取到这个DOM元素。

然后我们就可以在componentDidMount中使用这个DOM元素，并且调用this.input.focus()的DOM API.整体就达到了页面加载完成就自动focus到输入框的个功能。

我们可以给任意代表HTML元素标签加上ref从而获取到它DOM元素然后调用DOM API .但是记住一个元祖： **能不用ref就不用**。特别是要避免用ref来做React.js本来就可以帮你做到的页面自动更新的操作和事件监听。多余的DOM操作其实是代码里面的“噪音”，不利于我们理解和维护。

顺带一提的是，其实可以给组件标签也加上ref，例如：

	<CLock ref={(clock) => this.clock = clock } />  

这样你获取到的是这个Clock组件在React.js内部初始化的实例。但这并不是什么常用的做法，而且也并不建议这么做，所以这里就简单提及，有兴趣的朋友可以自己学习探索。  