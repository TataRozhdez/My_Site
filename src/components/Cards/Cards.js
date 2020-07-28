import React from 'react'
import './Cards.scss'
import CardItem from '../CardItem/CardItem'
import contactkeeper from '../../resources/img/contactkeeper.png'
import icecream from '../../resources/img/icecream.png'
import quiz from '../../resources/img/quiz.png'
import randomjoke from '../../resources/img/randomjoke.png'

const cards = [
  {
    id: 1,
    img: contactkeeper,
    link: 'https://icecream-tata.firebaseapp.com/',
    name: 'Ice Cream',
    info: 'Made using \'create-react-app\'. According to the layout of an existing site.'
  },
  {
    id: 2,
    img: icecream,
    link: 'https://react-quiz-tata.firebaseapp.com/',
    name: 'Quiz App',
    info:'React application for creating and passing tests.'
  },
  {
    id: 3,
    img: quiz,
    link: 'https://tatarozhdez.github.io/Random_Joke/',
    name: 'Random Joke',
    info: 'The project was made as a test task - a generator of random jokes from Chuck Noris. It is written according to the layout from Figma; connected API; added saving jokes to the Local Storage.'
  },
  {
    id: 4,
    img: randomjoke,
    link: 'https://evening-savannah-89796.herokuapp.com/login',
    name: 'Contact Keeper',
    info: 'You can run test app with email: \'test@gmail.com\' & password: \'123456\', or create your own account.'
  }
]

const Cards = () => {
  return (
    <div className='cards'>
      {
        cards.map(card => <CardItem key={card.id} card={card} />)
      }
    </div>
  )
}

export default Cards
