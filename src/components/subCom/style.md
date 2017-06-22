## style

React.js中的元素的style属性的用法和DOM里面的style不大一样，普通的HTML中的：

    <h1 style='font-size: 12px; color: red;'>React.js 小书</h1>

在React.js中你需要把CSS属性变成一个对象再传给元素：
    
    <h1 style={{fontSize: '12px', color:this.state.color}}>React.js 小书</h1>

style接受一个对象，这个对象里面是这个元素的CSS属性键值对，原来CSS属性中带- 的元素都必须要去掉- 换成驼峰命名，如font-size换成fontSize，text-align换成textAlign。

用对象作为style方便我们动态设置元素的样式。我们可以用props或者state中的数据生成样式对象再传给元素，然后用setState就可以修改演示，非常灵活：

    <h1 style={{fontSize: '12px', color: this.state.color}}>React.js 小书</h1>

只要简单地setState({color:'blue'})就可以修改元素的颜色成蓝色