import React from 'react'
import './Contact.scss'
import footerBck from '../../resources/img/footer.jpg'

import github from '../../resources/img/github.png'
import linkedin from '../../resources/img/linkedin.png'
import instagram from '../../resources/img/instagram.png'
import facebook from '../../resources/img/facebook.png'

const Contact = () => {
  return (
    <div className='contact'>
      <img className='footer-bck' src={footerBck} alt='background' />
      <h3>Find me on another platforms...</h3>
      <div className='link'>
        <a href='https://github.com/TataRozhdez'>
          <img src={github} alt='github' />
          &nbsp;Github
        </a>
        <a href='https://www.linkedin.com/in/tata-zhukova-b0610b19a/'>
          <img src={linkedin} alt='linkedin' />
          &nbsp;LinkedIn
        </a> 
        <a href='https://www.instagram.com/tata_rozhdez/?hl=ru'>
          <img src={instagram} alt='instagram' />
          &nbsp;Instagram
        </a>
        <a href='https://www.facebook.com/profile.php?id=100005407309063'>
          <img src={facebook} alt='facebook' />
          &nbsp;Facebook
        </a>
      </div>
    </div>
  )
}

export default Contact
