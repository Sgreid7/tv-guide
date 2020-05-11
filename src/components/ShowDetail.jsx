import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Overdrive from 'react-overdrive'
import Actor from './Actor'
import { TVPoster } from './TVShow'
import axios from 'axios'
import moment from 'moment'

const ShowDetail = (props) => {
  const showId = props.match.params.id
  // console.log(props)
  const [show, setShow] = useState({})
  const [actors, setActors] = useState([])

  const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'
  const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280'

  const getTVShow = async () => {
    const cast = await axios.get(
      `https://api.themoviedb.org/3/tv/${showId}/credits?api_key=88859848d50c55f203e248f5a006929e&language=en-US`
    )
    console.log(cast.data)
    setActors(cast.data.cast)

    const showInfo = await axios.get(
      `https://api.themoviedb.org/3/tv/${showId}?api_key=88859848d50c55f203e248f5a006929e&language=en-US`
    )
    console.log(showInfo)
    setShow(showInfo.data)
  }

  useEffect(() => {
    // get info from API about the tv show
    getTVShow()
  }, [])

  return (
    <>
      <Main>
        <ShowSection backdrop={`${BACKDROP_PATH}${show.backdrop_path}`}>
          <ShowInfo>
            <Overdrive id={`${show.id}`}>
              <TVPoster
                src={`${POSTER_PATH}${show.poster_path}`}
                alt={show.name}
              />
            </Overdrive>
            <div>
              <h1>{show.name}</h1>
              <h3>
                ({moment(show.first_air_date).format('MMMM Do, YYYY')} -{' '}
                {moment(show.last_air_date).format('MMMM Do, YYYY')})
              </h3>
              <p>{show.overview}</p>
            </div>
          </ShowInfo>
        </ShowSection>
        <Header>Cast</Header>
        <ActorSection>
          {actors.map((actor) => {
            return (
              <Actor
                key={actor.id}
                id={actor.id}
                name={actor.name}
                character={actor.character}
              />
            )
          })}
        </ActorSection>
      </Main>
    </>
  )
}

export default ShowDetail
const Main = styled.main`
  background: #111;
`

const ShowSection = styled.section`
  position: relative;
  padding-top: 50vh;
  background: url(${(props) => props.backdrop}) no-repeat;
  background-size: cover;
`
const ShowInfo = styled.section`
  background: #111;
  color: whitesmoke;
  text-shadow: 0.05rem 0.05rem 0.05rem rgb(255, 250, 205);
  text-align: center;
  padding: 2rem 10%;
  display: flex;

  div {
    margin-left: 1.2rem;
    line-height: 1.5rem;

    > h1 {
      font-size: 2.2rem;
      margin-top: 0;
      font-style: italic;
      -webkit-text-fill-color: rgb(
        255,
        250,
        205
      ); /* Will override color (regardless of order) */
      -webkit-text-stroke-width: 1.5px;
      -webkit-text-stroke-color: #000;
    }

    > p {
      font-size: 1.2rem;
    }

    > h3 {
      font-size: 1.5rem;
      -webkit-text-fill-color: rgb(
        255,
        255,
        255
      ); /* Will override color (regardless of order) */
      -webkit-text-stroke-width: 0.5px;
      -webkit-text-stroke-color: #000;
    }
  }

  img {
    position: relative;
    top: -5rem;
  }
`
const Header = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  font-size: 2rem;
  color: whitesmoke;
  text-shadow: 0.05rem 0.05rem 0.05rem rgb(255, 250, 205);
  margin: 0 auto;
  border-bottom: 0.15rem solid rgb(255, 250, 205);
`

const ActorSection = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 1rem;
  text-align: center;
  color: whitesmoke;
  text-shadow: 0.05rem 0.05rem 0.05rem rgb(255, 250, 205);

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: whitesmoke;
  }
`
