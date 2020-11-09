import React, { useState } from 'react'
import About from './components/About/About'
import Cards from './components/Cards/Cards'
import Quotes from './components/Quotes/Quotes'
import chevron from './resources/img/chevron.png'
import Contact from './components/Contact/Contact'
import './App.scss'
import { MyCanvas } from './components/MyCanvas/MyCanvas'

const App = () => {
  const [cursor, setCursor] = useState({
    top: '',
    left: '',
    x: '',
    y: '',
  })

  const { top, left } = cursor

  const mouseMove = (e) => {
    setCursor({
      top: e.pageY + 'px',
      left: e.pageX + 'px',
    })
  }

  return (
    <div className='App' id='top' onMouseMove={mouseMove}>
      <div className='cursor' style={{ top: `${top}`, left: `${left}` }} />
      <MyCanvas />
      <About />
      <Quotes />
      <Cards />
      <Contact />
      {window.scrollY > 0 ? (
        <a className='chevron' href='#top'>
          <img src={chevron} alt='up' />
        </a>
      ) : null}
    </div>
  )
}

export default App
