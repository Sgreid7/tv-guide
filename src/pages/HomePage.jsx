import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import TVShow from '../components/TVShow'

const HomePage = () => {
  // create a hook for the tv shows
  const [shows, setShows] = useState([])

  const getTVShows = async () => {
    // use axios to retrieve tv shows from the moviedb
    const response = await axios.get(
      ' https://api.themoviedb.org/3/tv/top_rated?api_key=88859848d50c55f203e248f5a006929e&language=en-US&page=1'
    )
    // set the shows state to the results of the api call
    setShows(response.data.results)
    // console.log(response.data.results)
  }

  useEffect(() => {
    // console.log('component loaded')
    // retrieve tv show data when page loads
    getTVShows()
  }, [])

  return (
    <>
      <TVShowGrid>
        {shows.map((show) => (
          <TVShow key={show.id} show={show} />
        ))}
      </TVShowGrid>
    </>
  )
}

export default HomePage

const TVShowGrid = styled.section`
  display: grid;
  padding: 2rem;
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 1rem;
`
