import React, { Component } from 'react'

export default class Article extends Component {
  
  render() {
    const { history } = this.props;
    console.log(this.props)
  
    let title = this.props.match.params.title;
    return (
      <div>
        <h2>{title}</h2>
        <button onClick={history.goBack}>Back to List</button>
      </div>
    )
  }
}
