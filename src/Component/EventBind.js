import React, { Component } from 'react'

 class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         mes:'hello'
      }
    }
    click(){
        this.setState({
            mes:'good'
        })
    }
  render() {
    return (
        <div>
        <div>{this.state.mes}</div>
      <button onClick={this.click.bind(this)}>Click</button>
        </div>
    )
  }
}

export default EventBind