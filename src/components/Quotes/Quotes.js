import React, { useState, useEffect } from 'react'
import quotesJson from '../../resources/quotes.json'
import './Quotes.scss'

const Quotes = () => {
  const [quot, setQuot] = useState({})

  useEffect(() => {
    const num = Math.floor(Math.random() * 50)

    setQuot(quotesJson[num])
  }, [])

  return (
    <div className='quot'>
      <div className='quot-content'>
        <h2>&#171; {quot.q} &#187;</h2>
        <span>&#169; {quot.a}</span>
      </div>
    </div>
  )
}

export default Quotes
