import React from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div>
      <div>
         <h1>Henry Dogs</h1>
         <Link to='/home'>Ir a home</Link>
      </div>
    </div>
  )
}

export default Landing