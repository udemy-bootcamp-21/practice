import React, { useEffect, useState } from 'react'
import './random.css'
import RandomNumber from './RandomNumber';

const Random = () => {

  const [random,setRandom] = useState()
  
  useEffect(() => {
    let timer = setInterval(() => {
      setRandom(Math.floor(Math.random(10)*100))
    }, 1000); 
    return () => {
      clearInterval(timer)
    }
  })

  return (
    <div className='random'>
      <RandomNumber random={random}/>
    </div>
  )
}

export default Random