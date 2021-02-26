import React from 'react'
import mandalaImg from '../../resources/img/mandala.png'
import './Header.scss'

export const Header = () => {
  return (
    <div className='Header'>
      <div className='header-image'>
        <img src={mandalaImg} alt='Manadala' />
      </div>
      <h1 className='header-mantra'>ॐ गं गणपतये नमः</h1>
      <h1 className='none'>Tata Rozhdez. Personal website</h1>
    </div>
  )
}
