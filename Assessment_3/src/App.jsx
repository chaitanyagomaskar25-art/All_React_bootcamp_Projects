import React from 'react'
import Login from './components/Login'
import { ContextProvider } from './context/AuthContext'

const App = () => {
  return (
     <ContextProvider>
      <Login />
     </ContextProvider>
  )
}

export default App
