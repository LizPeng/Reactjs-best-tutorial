import React, { Component } from 'react' 

const getDefaultStyledPost = (defaultStyle) => {
  /* TODO */
  return (
    class Post extends React.Component {
      render() {
        const style = {...defaultStyle, ...this.props.style}
        return (
          <p style={style}>dwdwd</p>
        )
      }
    }
  )
}

const getDefaultStyledPostv1 = (defaultStyle) => {
  return props => <p style={{...defaultStyle, ...props.style}}/>
}

const getDefaultStyledPostv2 = (defaultStyle) => ({style}) => <p style={{...defaultStyle, ...props.style}}/>