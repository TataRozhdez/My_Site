import React from 'react'
import myPhoto from '../../resources/img/I-min.png'
import './About.scss'

const About = () => {
  return (
    <div id='about' className='about'>
      <img src={myPhoto} alt='Tata Zhukova' />
      <div className='about-text'>
        <p>Hi there!</p>
        <p>
          {'\u00A0\u00A0'}My name is Tatiana. I’m vegetarian and optimistic
          person. I like learning new things and entertaining challenges.
        </p>
        <p>
          {'\u00A0\u00A0'}In my free time, I like practicing yoga, walking in
          the park, and spending time with my friends. My favorite quote:
          &#171;Love what you do and do what you love&#187;.
        </p>
        <p>Have a nice day!</p>
      </div>
    </div>
  )
}

export default About
