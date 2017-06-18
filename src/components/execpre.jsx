import React, { Component } from 'react' 

class Input extends Component {
  constructor(){
    super()
    this.state = {
      userinput:''
    }
  }
  userinputChange(event){
    this.setState({ userinput : event.target.value })
    let userinput =  event.target.value
    this.props.fromInput(userinput)
  }
  render () {
    return (
      <div>
        <input type='number'
          value={this.state.userinput} 
          onChange={this.userinputChange.bind(this)} />
      </div>
    )
  }
}

class PercentageShower extends Component {
  static defaultProps = {
    show:[]
  }
  render () {
    return (
      <div>
        
      </div>
    )
  }
}

class PercentageApp extends Component {
  constructor(){
    super()
    this.state = {
      output:''
    }
  }

  inputToOutput(input){
    var showinputv1 = parseFloat(input)
    var showinputv2 = (showinputv1*100).toFixed(2)
    this.setState({output:showinputv2+'%'})
  }

  render () {
    return (
      <div>
        <Input fromInput={this.inputToOutput.bind(this)} />
        <PercentageShower  />
      </div>
    )
  }
}

export default PercentageApp