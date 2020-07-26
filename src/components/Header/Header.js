import React from 'react'
import './Header.scss'

const Header = (props) => {

  return (
    <div className='header'>
      <h1>Tata Rozhdez</h1>
      <ul onMouseOver={props.hoverLink()}>
        <li>Home</li>
        <li>About</li>
        <li>Project</li>
        <li>Contact</li>
      </ul>
    </div>
  )
}

export default Header
