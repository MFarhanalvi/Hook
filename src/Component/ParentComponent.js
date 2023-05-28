import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentname:'parent'
      }
      this.greetparent=this.greetparent.bind(this)
    }

    greetparent(){
        alert(`hello ${this.state.parentname}`)
    }

  render() {
    return (
        <div>
            <ChildComponent greethandler={this.greetparent}/>
        </div>
    )
  }
}

export default ParentComponent