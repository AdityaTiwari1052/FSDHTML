import React, { useState } from 'react'


function StateHandling() {
    const[count,setCount]=useState(20);
    function doIncrement(){
        setCount(count+20)
    }
    function doDecrement(){
        setCount(count-20)
    }
  return (
    <div>
    <div> StateHandling
      <h2>counter Value:{count}</h2>
    </div>
    <div>
        <button onClick={doIncrement}>Increment </button>
        <button onClick={doDecrement}>Decrement</button>

    </div>
    </div>

  )
}

export default StateHandling
