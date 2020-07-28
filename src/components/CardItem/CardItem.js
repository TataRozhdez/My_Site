import React from 'react'
import PropTypes from 'prop-types'
import './CardItem.scss'

const CardItem = ({ card: { img, link, name, info } }) => {
  return (
    <div className='card'>
      <div className='front'>
        <a href={link}>
          <img src={img} alt={name} />
          <h3>{name}</h3>
        </a>
      </div>
      <div className='back'>
        <a href={link}>
          <h3>{name}</h3>
          <p>{info}</p>
        </a>   
      </div>
    </div>
  )
}

CardItem.propTypes = {
  card: PropTypes.object.isRequired
}

export default CardItem
