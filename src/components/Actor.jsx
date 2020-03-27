import React from 'react'
import { Link } from 'react-router-dom'

const Actor = ({ id, name, character }) => {
  return (
    <li>
      <Link to={`/actor/${id}`}>
        <h3>Name:</h3>
        <p>{name}</p>
        <h3>Character:</h3>
        <p>{character}</p>
      </Link>
    </li>
  )
}

export default Actor
