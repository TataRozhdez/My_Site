import React from 'react'
import PropTypes from 'prop-types'
import editImg from '../../resources/img/edit.png'
import arrowImg from '../../resources/img/arrow.png'
import githubImg from '../../resources/img/github-white.png'
import './CardItem.scss'

const CardItem = ({ card: { link, bck, github, info, tech } }) => {
  return (
    <li className='grid'>
      <img className='card-bck' src={bck} alt='backgtound' />
      <div className='card-content'>
        <p>
          <img className='card-icon' src={editImg} alt='Made with' /> {tech}
        </p>
        <h4 className='card_info'>
          <a
            className='card_info'
            href={link}
            target='_blank'
            rel='noopener noreferrer'
          >
            {' '}
            {info}
          </a>
        </h4>
        <p className='card_footer-link'>
          <a href={github} target='_blank' rel='noopener noreferrer'>
            <img
              className='card-icon'
              src={githubImg}
              alt='Github repositorie'
              title='Github repositorie'
            />{' '}
            Repo
          </a>
          <a href={link} target='_blank' rel='noopener noreferrer'>
            <img className='card-icon' src={arrowImg} alt='Link' title='Link' />{' '}
            Visit
          </a>
        </p>
      </div>
    </li>
  )
}

CardItem.propTypes = {
  card: PropTypes.object.isRequired,
}

export default CardItem
