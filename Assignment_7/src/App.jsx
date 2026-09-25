import React, { useEffect, useState } from 'react'
import "./App.css"
const App = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  useEffect(()=>{
    console.log("Effect ran: Title updated");
    document.title = `count ${count}`
    
  }, [count])
  return (
    <div className='container'>
      <h1>Document Title Syncer</h1>
      <p>Current Count: {count}</p>
      <button onClick={()=>{
        setCount(prev => prev+1)
      }}>Increament Count</button>
      <button onClick={()=>{
        setToggle(prev => !prev)
      }}>Toggle Other State(Watch Console)</button>
      <p>Other state is : {toggle.toString()}</p>
    </div>
  )
}

export default App
