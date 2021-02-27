import React from 'react'
import myPhoto from '../../resources/img/I-min.png'
import './About.scss'

const About = () => {
  return (
    <div id='about' className='about'>
      <img src={myPhoto} alt='Tata Zhukova' title="It's me" />
      <div className='about-text'>
        <h1>Hi, I'm Tata</h1>
        <p>
          I’m vegetarian, lucky and clever person. I like learning new things
          and entertaining challenges.
        </p>
        <p>
          {'\u00A0\u00A0'}In my free time, I like read books, practicing yoga,
          walking in the park and spending time with my friends.
        </p>
        <p>
          My favorite book: Jonathan Livingston Seagull. She teaches that
          nothing is impossible in the world and that if you want something and
          go to it with all your heart, it will come true.
        </p>
        <p>My favorite quote:</p>
        <h2>&#171;Love what you do and do what you love&#187;.</h2>
      </div>
    </div>
  )
}

export default About
