import React, { useState } from 'react'
import About from './components/About/About'
import './App.scss'
import Cards from './components/Cards/Cards'
import Quotes from './components/Quotes/Quotes'

import bck2 from './resources/img/10.jpg'
import bck3 from './resources/img/3.jpg'
import bck4 from './resources/img/4.jpg'
import Fade from 'react-reveal'
import { Transition } from 'react-transition-group'
import Contact from './components/Contact/Contact'

const App = () => {

  const [cursor, setCursor] = useState({
    top: '',
    left: '',
    x: '',
    y: ''
  })

  const [title, setTitle] = useState(false)
  const [about, setAbout] = useState(false)
  const [project, setProject] = useState(false)
  const [contact, setContact] = useState(false)

  const { top, left, x, y } = cursor
  
  const mouseMove = e => {
    setCursor({
      top: e.pageY + 'px',
      left: e.pageX + 'px',
      x: +e.clientX - 80 + 'px',
      y: +e.clientY - 70 + 'px'
    })
  
  }

  let classCursor = [ 'cursor' ]
  let classHeader = [ 'header' ]

  if (title) {
    classCursor.push('link-grow')
  } else {
    classCursor = ['cursor']
  } 

  const scrolProj = e => {

  }

  return (
    <div className='App' onMouseMove={mouseMove}>
      <div
        className={classCursor.join(' ')}
        style={{ top: `${top}`, left: `${left}` }}
      />
      <div className={classHeader.join(' ')}>
        {about && (
          <Transition timeout={500}>
            <Fade>
              <img src={bck2} alt='bck' />
            </Fade>
          </Transition>
        )}
        {project && (
          <Transition timeout={500}>
            <Fade>
              <img src={bck3} alt='bck' />
            </Fade>
          </Transition>
        )}
        {contact && (
          <Transition timeout={500}>
            <Fade>
              <img src={bck4} alt='bck' />
            </Fade>
          </Transition>
        )}

        <div className='container'>
          <h1
            className='title'
            onMouseOver={() => setTitle(true)}
            onMouseLeave={() => setTitle(false)}
          >
            Tata Zhukova
          </h1>
          <h1
            className='title-text'
            style={{ clipPath: `circle(80px at ${x} ${y})` }}
          >
            Tata Zhukova
          </h1>
        </div>

        <Fade cascade>
          <ul>
            <li
              onMouseOver={() => setAbout(true)}
              onMouseLeave={() => setAbout(false)}
            >
              About Me
            </li>
            <li
              onMouseOver={() => setProject(true)}
              onMouseLeave={() => setProject(false)}
              onClick={scrolProj}
            >
              Project
            </li>
            <li
              onMouseOver={() => setContact(true)}
              onMouseLeave={() => setContact(false)}
            >
              Contact
            </li>
          </ul>
        </Fade>
      </div>
      <About />
      <Quotes />
      <Cards />
      <Contact />
    </div>
  )
}

export default App
