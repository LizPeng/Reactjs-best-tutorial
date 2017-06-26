import React, { Component } from 'react'

const loadAndRefresh = (url) => (WrappedComponent) => {
  return class extends Component {
    componentWillMount () {
      this._loadData()
    }

    async _loadData () {
      this.setState({content: '数据加载中...'})
      const content = await getDate(url)
      this.setState({ content })
    }
  }
}