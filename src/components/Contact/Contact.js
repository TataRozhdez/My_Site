import React from 'react'
import './Contact.scss'
import footerBck from '../../resources/img/footer.jpg'

import github from '../../resources/img/github-white.png'
import linkedin from '../../resources/img/linkedin.png'
import instagram from '../../resources/img/instagram.png'
import facebook from '../../resources/img/facebook.png'

const Contact = () => {
  return (
    <div id='contact' className='contact'>
      <img className='footer-bck' src={footerBck} alt='background' />
      <div className='contact-text'>
        <h2>
          {'\u00A0\u00A0'}You can tell me "Hi!" and subscribe on another
          platforms:
        </h2>
        <div className='link'>
          <a
            href='https://github.com/TataRozhdez'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={github} alt='github' />
          </a>
          <a
            href='https://www.linkedin.com/in/tata-zhukova-b0610b19a/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={linkedin} alt='linkedin' />
          </a>
          <a
            href='https://www.instagram.com/tata_rozhdez/?hl=ru'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={instagram} alt='instagram' />
          </a>
          <a
            href='https://www.facebook.com/profile.php?id=100005407309063'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={facebook} alt='facebook' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
