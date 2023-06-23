import React from 'react'
import './randomnumber.css'

const RandomNumber = (props) => {
  return (
    <div className='container'>
      {props.random ? props.random : "start"}
    </div>
  )
}

export default RandomNumber