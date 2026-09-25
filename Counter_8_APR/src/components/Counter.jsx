import React, { useState } from 'react'

const Counter = (props) => {
    const [score, setScore] = useState(0)
    const updateOnce = ()=>{
        setScore(score +1)
    }
    const decreaseOnce = ()=>{
        setScore(score -1)
    }
    const updateThree = ()=>{
        setScore(prev => prev+1)
        setScore(prev => prev+1)
        setScore(prev => prev+1)
    }
    // const updateThree = ()=>{
    //     setScore(score+3)
    // }
    const resetFunction = ()=>{
        setScore(0)
    }

  return (
    <div key={props.index} className="counter-card">
      <h1>Player {props.index} Score</h1>
      <h2>{score}</h2>
      <button onClick={decreaseOnce}>-1</button>
      <button onClick={updateOnce}>+1</button>
      <button onClick={updateThree}>+3(updater)</button>
      <button onClick={resetFunction}>Reset</button>
    </div>
  )
}

export default Counter
