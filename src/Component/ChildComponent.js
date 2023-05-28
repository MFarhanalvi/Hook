import React from 'react'

function ChildComponent(props) {
  return (
<button onClick={props.greethandler}>GreetParent</button>
    )
}

export default ChildComponent