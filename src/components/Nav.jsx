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
  background: #111;
  border-bottom: 0.2rem solid rgb(255, 250, 205);
  transition: 0.3s ease;

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
    color: rgba(245, 245, 245);
    text-shadow: 0.1rem 0.1rem 0.1rem solid rgb(255, 250, 205);
    padding: 1rem;
    font-size: 1.5rem;
    :hover {
      text-shadow: 0.5rem 0.5rem 0.5rem solid rgba(245, 245, 245);
      color: rgb(255, 250, 205);
    }
  }
`
