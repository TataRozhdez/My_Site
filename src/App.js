import React, { useState } from 'react'
import About from './components/About/About'
import './App.scss'
import Cards from './components/Cards/Cards'
import Quotes from './components/Quotes/Quotes'

import MyTransition from './resources/myTransition/MyTransition'

const App = () => {

  const [cursor, setCursor] = useState({
    top: '',
    left: ''
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
  let classTitle = ['title']
  let classHeader = [ 'header' ]

  if (title) {
    classCursor.push('link-grow')
    classTitle.push('hovered-title')
  } else {
    classCursor = ['cursor']
    classTitle = ['title']
  } 

  return (
    <div className='App' onMouseMove={mouseMove}>
      <div
        className={classCursor.join(' ')}
        style={{ 'top': `${top}`, 'left': `${left}` }}
      />
      <div className={classHeader.join(' ')} > 
        {about && <MyTransition bck='about' />}
        {project && <MyTransition bck='project' /> }
        {contact && <MyTransition bck='contact' /> }
        <h1
          className={classTitle.join(' ')}
          onMouseOver={() => setTitle(true)}
          onMouseLeave={() => setTitle(false)}
        >
          Tata Zhukova
        </h1>
        <ul>
          <li
            onMouseOver={() => setAbout(true)}
            onMouseLeave={() => setAbout(false)}
          >About Me</li>
          <li
            onMouseOver={() => setProject(true)}
            onMouseLeave={() => setProject(false)}
          >Project</li>
          <li
            onMouseOver={() => setContact(true)}
            onMouseLeave={() => setContact(false)}
          >Contact</li>
        </ul>
      </div>
      <About />
      <Quotes />
      <Cards />
    </div>
  )
}

export default App
