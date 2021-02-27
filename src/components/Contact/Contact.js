import React from 'react'
import './Contact.scss'

import github from '../../resources/img/github-white.png'
import linkedin from '../../resources/img/linkedin.png'
import instagram from '../../resources/img/instagram.png'
import facebook from '../../resources/img/facebook.png'

const Contact = () => {
  return (
    <div id='contact' className='contact'>
      <div className='contact-text'>
        <h3>
          {'\u00A0\u00A0'}You can tell me "Hi!" and subscribe on another
          platforms:
        </h3>
        <div className='link'>
          <a
            href='https://github.com/TataRozhdez'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={github} alt='github' title='Github' />
          </a>
          <a
            href='https://www.linkedin.com/in/tata-zhukova-b0610b19a/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={linkedin} alt='linkedin' title='Linkedin' />
          </a>
          <a
            href='https://www.instagram.com/tata_rozhdez/?hl=ru'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={instagram} alt='instagram' title='Instagram' />
          </a>
          <a
            href='https://www.facebook.com/profile.php?id=100005407309063'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={facebook} alt='facebook' title='Facebook' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
