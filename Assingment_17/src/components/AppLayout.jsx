import React from 'react'
import { NavLink, Outlet } from 'react-router'

const AppLayout = () => {
  return (
    <>
      <header>Header</header>
      <nav>
        <NavLink to='/'>Home</NavLink> <br /><br />
        <NavLink to='/favorites'>favorites</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default AppLayout
