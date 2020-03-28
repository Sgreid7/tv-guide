import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Actor = ({ id, name, character }) => {
  return (
    <li>
      <Link to={`/actor/${id}`}>
        <Header>Name</Header>
        <p>{name}</p>
      </Link>
      <Header>Character</Header>
      <p>{character}</p>
    </li>
  )
}

export default Actor

const Header = styled.h3`
  text-decoration: underline;
`
