import React from 'react'
import About from './components/About/About'
import Cards from './components/Cards/Cards'
import Quotes from './components/Quotes/Quotes'
import chevron from './resources/img/chevron.png'
import Contact from './components/Contact/Contact'
import './App.scss'
import { MyCanvas } from './components/MyCanvas/MyCanvas'
import bckVideoMP4 from './resources/img/abstract.mp4'
import bckVideoWEBM from './resources/img/abstract.webm'

const App = () => {
  return (
    <div className='App' id='top'>
      <div className='parallax__layer--back'>
        <video className='videoTag' autoPlay loop muted>
          <source src={bckVideoMP4} type='video/mp4' />
          <source src={bckVideoWEBM} type='video/webm' />
        </video>
      </div>
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
