import React from 'react'
import CardItem from '../CardItem/CardItem'
import contactkeeper from '../../resources/img/contactkeeper.png'
import icecream from '../../resources/img/icecream.png'
import quiz from '../../resources/img/quiz.png'
import randomjoke from '../../resources/img/randomjoke.png'
import wind from '../../resources/img/wind.png'
import css from '../../resources/img/css.png'
import poker from '../../resources/img/pokercards.png'
import appco from '../../resources/img/appco.png'
import './Cards.scss'

const cards = [
  {
    id: 1,
    img: poker,
    link: 'https://combination-trainer.web.app/',
    name: 'Hand Trainer',
    info: 'A game designed to train the speed of poker hand detection.'
  },
  {
    id: 2,
    img: quiz,
    link: 'https://react-quiz-tata.firebaseapp.com/',
    name: 'Quiz App',
    info:'React application for creating and passing tests.'
  },
  {
    id: 3,
    img: randomjoke ,
    link: 'https://tatarozhdez.github.io/Random_Joke/',
    name: 'Random Joke',
    info: 'A generator of random jokes. You can saving favorite jokes to your the Local Storage.'
  },
  {
    id: 4,
    img: contactkeeper,
    link: 'https://evening-savannah-89796.herokuapp.com/login',
    name: 'Contact Keeper',
    info: 'You can run test app with email: \'test@gmail.com\' & password: \'123456\', or create your own account.'
  },
  {
    id: 5,
    img: icecream,
    link: 'https://icecream-tata.firebaseapp.com/',
    name: 'Ice Cream',
    info: 'Made using \'create-react-app\'. According to the layout of an existing site.'
  },
  {
    id: 6,
    img: css,
    link: 'https://css-drawing.web.app/',
    name: 'CSS-Drawing',
    info: 'Drawing images only with CSS.'
  },
  {
    id: 7,
    img: wind,
    link: 'https://wind-pg.web.app/',
    name: 'Wind-Page',
    info: 'Website sketch.'
  },
  {
    id: 8,
    img: appco,
    link: 'https://sudoku-ts.web.app/',
    name: 'Sudoku Web App',
    info: 'Create with using React, Redux, TypeScript, StyledComponents.'
  }
]

const Cards = () => {
  return (
    <div id='project' className='cards'>
      {
        cards.map(card => <CardItem key={card.id} card={card} />)
      }
    </div>
  )
}

export default Cards
