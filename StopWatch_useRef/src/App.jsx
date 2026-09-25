// import React, { useRef, useState } from 'react'

// const App = () => {
//   const countRef = useRef(0);
//   const [state, setState] = useState(0)
//   return (
//     <div>
//       <h1>useRef Count: {countRef.current}</h1>
//       <h1>useState Count: {state}</h1>
//       <button onClick={()=> {
//         countRef.current = countRef.current+1
//         console.log(countRef.current);

//         } }>Increment</button>

//       <button onClick={()=> setState(prev=> prev+1)}>Click me</button>
//     </div>
//   )
// }

// export default App

import React, { useRef, useState } from "react";
import "./App.css";
const App = () => {
  const [start, setStart] = useState(null);
  const [now, setNow] = useState(null);

  const stopWatchRef = useRef(null);

  const startWatch = () => {
    setStart(Date.now());
    setNow(Date.now());

    clearInterval(stopWatchRef.current);

    stopWatchRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  const stopWatch = () => {
    clearInterval(stopWatchRef.current);
  };

  let sec = 0;

  if (start != null) {
    sec = (now - start) / 1000;
  }

  return (
    <div className="stopwatch-container">
      <h1>My Stop Watch</h1>
      <p className="timer-display">{sec.toFixed(2)}</p>
      <div className="controls">
        <button onClick={startWatch}>Start</button>
        <button onClick={stopWatch}>Stop</button>
      </div>
    </div>
  );
};

export default App;
