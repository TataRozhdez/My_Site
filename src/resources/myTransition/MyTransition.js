import React, { useState } from 'react'
import Fade from 'react-reveal'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import about from '../img/2.jpg'
import bck3 from '../img/3.jpg'
import bck4 from '../img/4.jpg'

const MyTransition = props => {
  console.log(props)

  const [ image, setImage ] = useState()
  
  if (props.bck) {
    setImage(about)
  }

  console.log(props.bck)

  return (
    <TransitionGroup>
    <CSSTransition timeout={500}>
      <Fade>
        <img src={image} alt='bck' />
        {/* {bck.project ? <img src={bck3} alt='bck' /> : null} */}
        {/* {bck.contact && <img src={bck4} alt='bck' />} */}
        
      </Fade>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default MyTransition
