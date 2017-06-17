React.js认为所有状态都应该由React.js的state控制，只要类似于`<input /><textarea /> <select />` 这样的输入控件都被设置了value值，那么它们的值永远以被设置的值为准。值不变，value就不会变化。

监听 然后 setState

类似于`<input /><textarea /> <select />`这些元素的value值被React.js所控制、渲染的组件，在React.js当中被称为受控组件(Controlled Component)。对于用户可输入的控件，一般都可以让它们成为受控组件，这是React.js所推崇的做法。