import React from 'react'
import Logo from "./Logos/Logo"
import SearchBox from "./Forms/SearchBox";
import './NavBar.css'


function NavBar(props) {
  return (
    <div className='navbar'>
      <div className='logo-container'>
        <Logo />
      </div>
      <div className='searchbox-container'>
        <SearchBox onDataReceived={props.onDataReceived}/>
      </div>
    </div>
  )
}

export default NavBar