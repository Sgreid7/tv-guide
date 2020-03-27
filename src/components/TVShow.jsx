import React from 'react'
import Overdrive from 'react-overdrive'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'

const TVShow = ({ show }) => (
  <Link to={`/${show.id}`}>
    <Overdrive id={`${show.id}`}>
      <TVPoster src={`${POSTER_PATH}${show.poster_path}`} alt={show.name} />
    </Overdrive>
  </Link>
)

export default TVShow

TVShow.propTypes = {
  show: PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
}

export const TVPoster = styled.img`
  box-shadow: 0 0 2rem #000;
  /* border: 0.2rem solid gold; */
  transition: 0.3s ease;
  border-radius: 0.2rem;
  :hover {
    animation: 1.5s infinite hover;
  }
  @keyframes hover {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-0.5rem);
    }
  }
`
