import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import TVShow from '../components/TVShow'
import devices from '../utils/devices'

const HomePage = (props) => {
  // create a hook for the tv shows
  const [shows, setShows] = useState([])
  const [searchFilter, setSearchFilter] = useState('')
  const [featuredShow, setFeaturedShow] = useState({})

  // console.log(props)

  const getTVShows = async () => {
    // use axios to retrieve tv shows from the moviedb
    const response = await axios.get(
      ' https://api.themoviedb.org/3/tv/top_rated?api_key=88859848d50c55f203e248f5a006929e&language=en-US&page=1'
    )
    // set the shows state to the results of the api call
    // console.log(response.data.results)
    setShows(response.data.results)
    setFeaturedShow(
      response.data.results[
        Math.floor(Math.random() * response.data.results.length)
      ]
    )
  }

  const updateSearchFilter = (e) => {
    setSearchFilter(e.target.value)
  }

  useEffect(() => {
    // retrieve tv show data when page loads
    getTVShows()
  }, [])

  const MainComponent = () => {
    if (featuredShow) {
      return (
        <>
          <Main>
            <Header>
              <h1>Top Rated TV Shows</h1>
              <div className="search-box">
                <input
                  type="search"
                  name="search"
                  placeholder="Search shows..."
                  onChange={updateSearchFilter}
                  autoComplete="off"
                />
                <a className="search-btn" href="#">
                  <FontAwesomeIcon icon={faSearch} />
                </a>
              </div>
            </Header>
            <RandomShow>
              <h2>Featured Show of the Day</h2>
              <TVShow key={featuredShow.id} show={featuredShow} />
            </RandomShow>
            <TVShowGrid>
              {shows
                .filter((show) => {
                  return show.name
                    .toLowerCase()
                    .includes(searchFilter.toLowerCase())
                })
                .map((show) => {
                  return <TVShow key={show.id} show={show} />
                })}
            </TVShowGrid>
          </Main>
        </>
      )
    } else {
      return <h1>Loading...</h1>
    }
  }

  return MainComponent()
}

export default HomePage

const Main = styled.main`
  background: #111;
  margin-top: -1.3rem;
  padding-top: 0;
`
const RandomShow = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin: 7rem 7rem 2rem 7rem; */
  margin: 12vh 2rem 5vh 2rem;
  padding: 0 0 2rem 0;
  box-shadow: 0 0 1.3rem rgb(255, 250, 205);
  border-radius: 0.5rem;

  h2 {
    margin-bottom: 1rem;
    font-size: 1.2rem;
    font-style: italic;
    color: whitesmoke;
    text-align: center;
    -webkit-text-fill-color: rgb(
      255,
      250,
      205
    ); /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #000;
  }

  img {
    box-shadow: 0 0 1.3rem rgb(255, 250, 205);
  }

  @media (${devices.tablet}) {
    h2 {
      font-size: 2rem;
    }
  }
`
const TVShowGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 1.5rem;
  text-align: center;

  @media (${devices.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (${devices.laptop}) {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 2rem;
  }

  @media (${devices.laptopL}) {
    padding: 5rem 1.5rem 1.5rem 1.5rem;
    grid-template-columns: repeat(4, 1fr);
  }
`
const Header = styled.header`
  text-align: center;
  margin: 1rem;

  h1 {
    font-size: 2rem;
    padding: 1rem 0 0 0;
    -webkit-text-fill-color: rgb(
      255,
      250,
      205
    ); /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #000;
  }

  .search-box {
    position: absolute;
    background: rgb(255, 250, 205);
    height: 2.5rem;
    border-radius: 2.5rem;
    padding: 0.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: 0 0.1rem 0.1rem #000;

    :hover > input {
      width: 15rem;
      padding: 0 0.35rem;
    }

    :hover > .search-btn {
      background: #fff;
      color: #000;
      border: 0.05rem solid #000;
    }
  }

  .search-btn {
    color: #fff;
    float: right;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s ease;
  }

  input {
    border: none;
    background: none;
    outline: none;
    float: left;
    padding: 0;
    color: #000;
    transition: 0.4s ease;
    width: 0rem;
  }

  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    display: none;
  }
`
