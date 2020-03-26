import React from 'react'
import Overdrive from 'react-overdrive'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'

const TVShow = ({ show }) => (
  <Link to={`/${show.id}`}>
    <Overdrive id={show.id}>
      <TVPoster src={`${POSTER_PATH}${show.poster_path}`} alt={show.title} />
    </Overdrive>
  </Link>
)

export default TVShow
const TVPoster = styled.img`
  box-shadow: 0 0 2rem #000;
`
