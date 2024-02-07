import React from 'react'
import Nav from './Nav'

const NavLayout = ({children}) => {
  return (
    <>
      <Nav/>
      {children}
    </>
  )
}

export default NavLayout
