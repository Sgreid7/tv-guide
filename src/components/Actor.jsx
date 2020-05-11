import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Actor = ({ id, name, character }) => {
  return (
    <Wrapper>
      <li>
        <h3>Name</h3>
        <Link to={`/actor/${id}`}>
          <p>{name}</p>
        </Link>
        <h3>Character</h3>
        <p>{character}</p>
      </li>
    </Wrapper>
  )
}

export default Actor

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  h3 {
    text-decoration: underline;
  }
`
