import React from 'react'
import { Outlet } from 'react-router'

const Header = () => {
  return (
    <header className='header'>
        <h1>My React App</h1>
        <div>
          <Outlet />
        </div>
    </header>
  )
}

export default Header
