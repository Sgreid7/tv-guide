import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <NavBar>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/actors">Actors</Link>
        </li>
      </ul>
    </NavBar>
  )
}

export default Nav

const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  background: rgba(245, 245, 245, 0.8);
  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    text-decoration: none;
    padding: 0;
    margin: 0;
  }

  li {
    display: flex;
    justify-content: space-between;
    margin: 0 2rem;
  }

  a {
    text-decoration: none;
    color: #000;
    padding: 1rem;
    font-size: 1.5rem;
  }
`
