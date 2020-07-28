import React, { useState, useEffect } from 'react'
import About from './components/About/About'
import './App.scss'
import Cards from './components/Cards/Cards'

const App = () => {
  useEffect(() => {
    fetch('https://zenquotes.io/api/random')
      .then(res => console.log(res))
      .catch()
      
  })

  const [cursor, setCursor] = useState({
    top: '',
    left: ''
  })

  const [hover, setHover] = useState(false)
  const { top, left } = cursor
  
  const mouseMove = e => {
    setCursor({
      top: e.pageY + 'px',
      left: e.pageX + 'px'
    })
  }

  let classCursor = [ 'cursor' ]
  let classTitle = [ 'title' ]

  if (hover) {
    classCursor.push('link-grow')  
    classTitle.push('hovered-title')
    } else {
    classCursor = ['cursor']
    classTitle = ['title']
  } 

  return (
    <div className='App' onMouseMove={mouseMove}>
      <div className={classCursor.join(' ')} style={{ 'top': `${top}`, 'left': `${left}` }} />
      <div className='header'>
        <h1
          className={classTitle.join(' ')}
          onMouseOver={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          Tata Rozhdez
          </h1>
        <ul>
          <li>About Me</li>
          <li>Project</li>
          <li>Contact</li>
        </ul>
      </div>
      <About />
      <Cards />
    </div>
  )
}

export default App
