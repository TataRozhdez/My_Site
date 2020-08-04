import React from 'react'
import './About.scss'
import aboutImg from '../../resources/img/about.png'

const About = () => {

  return (
    <div className='about'>
      <div className='container'>
        <img src={aboutImg} alt='Tata'/>
        <div className='about-text'>
          <h3>About me</h3>
          <p>
            Hi, everyone!<br /><br />
            My name is Tatiana and I’m a front-end developer, vegetarian, masseur and 25-year-old female. I like to learn new things, and I like to try to understand complex issues, so I fell in love with IT. I’ve been studying web-development since February 2020. Below you can see some examples of my work.<br /><br />
            In my free time, I like to walk in the park, practice yoga and sit with my friends in some cozy place.
            I don’t follow political news, so forgive me if I don’t support this conversation. But we can talk about cultures and customs, about travel, about new technologies, etc. <br />
            I’m always glad to meet new people. You can tell me " Hi!" and subscribe to other social networks. Links can be seen below. <br /><br />
            Have a nice day &#128420;
          </p>
        </div>
      </div> 
    </div>
  )
}

export default About
