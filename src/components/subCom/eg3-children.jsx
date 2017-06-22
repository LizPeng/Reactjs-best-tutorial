import React, { Component } from 'react' 
class BlackBorderContainer extends Component {
  /* TODO */
  render(){
    return(
      <div>
        {this.props.children.map( (children)=> {
          return (
            <div className="line">
              {children}
            </div>
          )
        })}
      </div>
    )
  }
}

export default BlackBorderContainer 