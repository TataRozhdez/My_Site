import React from 'react'
import CardItem from '../CardItem/CardItem'
import imgBck1 from '../../resources/img/1.jpeg'
import imgBck2 from '../../resources/img/2.jpeg'
import imgBck3 from '../../resources/img/3.jpeg'
import imgBck4 from '../../resources/img/4.jpeg'
import imgBck5 from '../../resources/img/5.jpeg'
import imgBck6 from '../../resources/img/6.jpeg'
import imgBck7 from '../../resources/img/7.jpeg'
import './Cards.scss'

const cards = [
  {
    id: 1,
    bck: imgBck1,
    link: 'https://combination-trainer.web.app/',
    github: 'https://github.com/TataRozhdez/Poker-Hand-Trainer',
    info: 'The game developed for practice hand detection in poker',
    tech: 'React/Sass',
  },
  {
    id: 2,
    bck: imgBck2,
    link: 'https://icecream-tata.firebaseapp.com/',
    github: 'https://github.com/TataRozhdez/Ice_Cream',
    info: 'Web site with design copied from wix.com',
    tech: 'Rect/Sass',
  },
  {
    id: 3,
    bck: imgBck3,
    link: 'https://sudoku-ts.web.app/',
    github: 'https://github.com/TataRozhdez/Sudoku_TS',
    info: 'Sudoku web-game',
    tech: 'React/TypeScript',
  },
  {
    id: 4,
    bck: imgBck4,
    link: 'https://proshopapp-t.herokuapp.com/',
    github: 'https://github.com/TataRozhdez/ProShop_mern',
    info: 'Example of full stack electronic sales site',
    tech: 'MERN',
  },
  {
    id: 5,
    bck: imgBck5,
    link: 'https://pht-gallery.web.app/',
    github: 'https://github.com/TataRozhdez/PhotoGallery',
    info: 'Simple photo gallery web-application.',
    tech: 'React/Sass',
  },
  {
    id: 6,
    bck: imgBck6,
    link: 'https://react-quiz-tata.firebaseapp.com/',
    github: 'https://github.com/TataRozhdez/Quiz_App',
    info: 'Application for creating and passing tests',
    tech: 'React/Redux',
  },
  {
    id: 7,
    bck: imgBck7,
    link: 'https://tatarozhdez.github.io/Random_Joke/',
    github: 'https://github.com/TataRozhdez/Random_Joke',
    info: 'Generator of random jokes from Chuck Noris',
    tech: 'JS/Html/Css',
  },
]

const Cards = () => {
  return (
    <div className='cards-fill'>
      <h3>Explore some examples of my work</h3>
      <ul id='project' className='cards'>
        {cards.map((card) => (
          <CardItem key={card.id} card={card} />
        ))}
      </ul>
    </div>
  )
}

export default Cards
