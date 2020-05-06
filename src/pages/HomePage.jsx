import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import TVShow from '../components/TVShow'

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
              <input
                type="search"
                placeholder="Search for a show..."
                onChange={updateSearchFilter}
              />
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
  /* background: rgb(255, 250, 205); */

  h2 {
    color: whitesmoke;
    text-shadow: 1rem solid red;
  }
`
const TVShowGrid = styled.section`
  display: grid;
  padding: 5rem 1.5rem 1.5rem 1.5rem;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 1.5rem;
  text-align: center;
`
const Header = styled.header`
  text-align: center;
  margin: 1rem;
  h1 {
    color: rgba(245, 245, 245);
    text-shadow: 0.05rem 0.05rem 0.05rem rgb(255, 250, 205);
    padding: 1rem 0 0 0;
  }

  input[type='search'] {
    width: 30%;
    height: 2rem;
    border-radius: 1rem;
    box-shadow: 0 0 2rem 0 rgb(255, 250, 205);
    border: 0.04rem solid #000;
    :focus {
      outline: none;
    }
    ::placeholder {
      color: #000;
      padding-left: 0.2rem;
      font-style: italic;
    }
  }
`
