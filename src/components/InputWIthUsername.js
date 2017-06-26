import wrapWithLoadData from './wrapWithLoadData'
import wrapWithAjaxData from './wrapWithAjaxData'

class InputWithUserName extends Component {
    render () {
        return <input value={this.props.data} />
    }
}

InputWithUserName = wrapWithAjaxData(InputWithUserName)
InputWithUserName = wrapWithLoadData(InputWithUserName, 'username')
//我们给InputWithUserName应用了两种高阶组件：
//先用wrapWithAjaxDat包裹InputWithUserName，在用wrapWithLoadData包含上次包裹的结果
//实际上最终得到的组件会先去LocalStorage取数据
//然后通过props.data传给下一次组件
//下一层组件用这个props.data通过Ajax去服务器取数据，
//然后再通过props.data把数据传给下一层



export default InputWithUserName