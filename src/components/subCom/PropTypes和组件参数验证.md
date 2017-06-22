这一章节的知识在你构建多人写作、大型应用程序的时候也是非常重要的，不可忽视。

JavaScript的灵活性体现在弱类型、高阶函数等语言特性上。而语言的弱类型一般来说确实让我们写代码很爽，但是也容易出bug。


变量没有固定类型可以随意赋值，在我们构建大型应用程序的时候并不是什么好事情。你写下了` let a = {}` ,如果这个共享的状态并且在某个地方把a=3，那么a.xxx就会让程序崩溃了。而这种非常隐晦但是低级的错误在强类型的语言例如C/C++ ,Java中是不可能发生的，这些代码连编译都不可能通过，也别妄图运行。

JavaScript早就脱离了玩具语言的领域并且投入到大型的应用程序的生产活动中，因为它的弱类型，常常意味着不是很安全。所以近年来出现了类似TypeScript和Flow等技术，来弥补JavaScript这方面的缺陷。

React.js的组件其实是为了构建大型应用程序而生。但是因为JavaScript这样的特性，你再编写了一个组件以后，根本不知道别人会怎么使用你的组件，往里传什么乱七八糟的参数。

    class Comment extends Component {
      const { comment } = this.props
      render () {
	    return (
	      <div className='comment'>
	   		 <div className='comment-user'>
	      	<span>{comment.username} </span>：
	    	</div>
	    	<p>{comment.content}</p>
	      </div>
   		 )
      }
    }

但是别人往里传一个额数组你拿他一点办法都没有：

    <Comment comment={1} /> 

JavaScript在这种情况下是不会报任何错误的，但是页面就是现实不正常，然后我们踏上了慢慢debug的路程。这个例子还是过于简单，但是对于比较复杂的成员和情况是比较难处理的。

于是React.js就提供了一种机制，让你可以**给组件的配置参数加上类型验证**，就用上述的评论组件的例子，你可以配置comment只能接受对象类型的comment参数，你传个数字进来组件就强制报错。这里我们先安装一个React提供的第三方prop-types：

    npm install --save prop-types


它可以帮助我们验证props的参数类型，例如：

    class Comment extends Component {
      static propTypes = {
   		 comment: PropTypes.object
      }
    
      render() {
	    const { comment } = this.props
	    return (
	      <div className='comment'>
	   		 <div className="comment-user">
	     	 <span>{comment.username}</span>
		   </div>
		   <p>{comment.content}</p>
	      </div>
	    )
      }
    }

注意我们在文件头部引入了PropTypes，并且给Comment组件类添加了属性propTypes，里面的内容的意思就是你传入的comment类型必须为object（对象）。

虽然propTypes帮我们指定了参数类型，但是并没有说这个参数一定要传入，事实上，这些参数默认都是可选的。可选参数我们可以通过配置defaultProps，让它在不传入的时候有默认值。但是我们这里并没有配置defaultProps，所以如果直接用<Comment /> 而不传入任何参数的话，comment就会使undefined，comment.username会导致程序报错。

React.js提供的PropTypes提供了一系列的数据类型可以用来配置组件的参数：
    
    PropTypes.array
    PropTypes.bool
    PropTypes.func
    PropTypes.number
    PropTypes.object
    PropTypes.string
    PropTypes.node
    PropTypes.element
    ...

更多类型及其用法可以参看官方文档：[Typchecking With PropTypes -React](https://facebook.github.io/react/docs/typechecking-with-proptypes.html)

组件参数验证在构建大型的组件库的时候相当有用，可以帮助我们迅速定位这种类型错误，让我们组件开发更加规范。另外也起到了一个说明文档的作用，如果大家都约定写propTypes，那你再使用别人写的组件的时候，只要看到组件的propTypes就清晰地指定这个组件到底能够接受什么参数，什么参数是可选的，是必选的。

# 总结

通过PropTypes给组件的参数做类型限制，可以在帮助我们迅速定位错误，这在构建大型应用程序的时候特别有用；另外，给组件加上propTypes，也让组件的开发，使用更加规范清晰。

这里建议大家写组件的时候尽量都写propTypes，有时候有点麻烦，但是是值得的。