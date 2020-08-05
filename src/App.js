import React, { useState } from 'react'
import About from './components/About/About'
import './App.scss'
import Cards from './components/Cards/Cards'
import Quotes from './components/Quotes/Quotes'

import bck2 from './resources/img/10.jpg'
import bck3 from './resources/img/3.jpg'
import bck4 from './resources/img/4.jpg'
import chevron from './resources/img/chevron.png'
import Fade from 'react-reveal/Fade'
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

  const { top, left } = cursor
  
  const mouseMove = e => {
    setCursor({
      top: e.pageY + 'px',
      left: e.pageX + 'px'
    })
  }

  let classCursor = [ 'cursor' ]
  let classHeader = [ 'header' ]

  if (title) {
    classCursor.push('link-grow')
  } else {
    classCursor = ['cursor']
  } 

  return (
    <div className='App' id="top" onMouseMove={mouseMove}>
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
        </div>

        <Fade cascade>
          <ul>
            <li
              onMouseOver={() => setAbout(true)}
              onMouseLeave={() => setAbout(false)}
            >
              <a href='#about'>About Me</a> 
            </li>
            <li
              onMouseOver={() => setProject(true)}
              onMouseLeave={() => setProject(false)}
            >
              <a href='#project'>Project</a> 
            </li>
            <li
              onMouseOver={() => setContact(true)}
              onMouseLeave={() => setContact(false)}
            >
              <a href='#contact'>Contact</a> 
            </li>
          </ul>
        </Fade>
      </div>
      <About />
      <Quotes />
      <Cards />
      <Contact />
      <a className='chevron' href='#top'><img src={chevron} alt='up' /></a>
    </div>
  )
}

export default App
