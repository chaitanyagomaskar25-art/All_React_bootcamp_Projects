// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [count, setCount ] =useState(0)
//   return (
//     <div>
//       <h2>Counter</h2>
//       <h1>{count}</h1>
//       <button onClick={()=>setCount(count+1)}>increase</button>
//       <button onClick={()=>setCount(count-1)}>decrease</button>
//     </div>
//   )
// }

// export default App

// import React, { useEffect, useRef, useState } from 'react'

// const App = () => {
//   const[input,setInput] = useState("")
//   const inputRef = useRef(null);
//   useEffect(()=>{
//     inputRef.current.focus();
//   },[])
//   return (
//     <div>
//       <input value={input} onChange={(e)=>setInput(e.target.value)} ref={inputRef} type="text" placeholder='Write Name'/>
//     </div>
//   )
// }

// export default App

import React, { useEffect, useRef, useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);

  const inputRef = useRef([]);
  const setTimeOutId = useRef(null);
  const alertTimeoutRef = useRef(null);

  useEffect(() => {
    inputRef.current[0].focus();
    return () => {
      clearTimeout(setTimeOutId.current);
      clearTimeout(alertTimeoutRef.current);
    };
  }, []);

  const handleChange = (e, idx) => {
    const newInput = [...input];
    newInput[idx] = e.target.value;
    setInput(newInput);

    clearTimeout(setTimeOutId.current);
    clearTimeout(alertTimeoutRef.current);

    if (e.target.value.length === 1) {
      setTimeOutId.current = setTimeout(() => {
        inputRef.current[idx + 1]?.focus();
      }, 700);
    }
    if (idx === 5) {
      alertTimeoutRef.current = setTimeout(() => {
        alert("DONE");
      }, 500);
    }
  };
  const handleKeyDown = (e, idx) => {
    clearTimeout(setTimeOutId.current);

    if (e.key === "ArrowRight") {
      inputRef.current[idx + 1]?.focus();
    }

    if (e.key === "ArrowLeft") {
      inputRef.current[idx - 1]?.focus();
    }
  };

  return (
    <div className="container">
      <button
        onClick={() => {
          inputRef.current[currentIdx - 1]?.focus();
        }}
        disabled={currentIdx === 0}
      >
        ←
      </button>
      {["", "", "", "", "", ""].map((item, idx) => (
        <input
          onKeyDown={(e) => handleKeyDown(e, idx)}
          onFocus={() => setCurrentIdx(idx)}
          key={idx}
          value={input[idx] || ""}
          onChange={(e) => handleChange(e, idx)}
          ref={(el) => (inputRef.current[idx] = el)}
          type="text"
          maxLength="1"
        />
      ))}
      <button
        onClick={() => {
          inputRef.current[currentIdx + 1]?.focus();
        }}
        disabled={currentIdx === 5}
      >
        →
      </button>
    </div>
  );
};

export default App;
