import React from 'react'
import About from './components/About/About'
import Cards from './components/Cards/Cards'
import Contact from './components/Contact/Contact'
import { Header } from './components/Header/Header'
import bck from './resources/img/bck2.jpg'
import './App.scss'

const App = () => {
  return (
    <div className='App' id='top'>
      <div className='parallax__layer-back'>
        <img className='videoTag' src={bck} alt='Background' />
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
