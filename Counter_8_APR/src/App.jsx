import React, { useState } from 'react'
import Counter from './components/Counter.jsx'
import './App.css'

const App = () => {
  const [theme, setTheme] = useState(false)

  const changeTheme = () => {
    setTheme(!theme)
  }

  return (
    <div className={theme ? "darkMode" : ""}>
      
      <div className="header">
        <h1>State Mastery Dashboard</h1>
        <button onClick={changeTheme}>
          {theme ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>

      <div className="counter-container">
        <Counter index={1} />
        <Counter index={2} />
      </div>

    </div>
  )
}

export default App