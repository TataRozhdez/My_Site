import React from 'react'
import About from './components/About/About'
import Cards from './components/Cards/Cards'
import Contact from './components/Contact/Contact'
import './App.scss'
import { Header } from './components/Header/Header'
import bckVideoMP4 from './resources/img/abstract.mp4'
import bckVideoWEBM from './resources/img/abstract.webm'

const App = () => {
  return (
    <div className='App' id='top'>
      <div className='parallax__layer-back'>
        <video className='videoTag' autoPlay loop muted>
          <source src={bckVideoMP4} type='video/mp4' />
          <source src={bckVideoWEBM} type='video/webm' />
        </video>
      </div>
      <Header />
      <div className='app-content'>
        <About />
        <Cards />
      </div>
      <Contact />
    </div>
  )
}

export default App
