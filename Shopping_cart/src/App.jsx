import React from 'react'
import Main from './components/Main'
import { ContextProvider } from './context/CartContext'

const App = () => {
  return (
    <ContextProvider>
       <Main />
    </ContextProvider>
  )
}

export default App
