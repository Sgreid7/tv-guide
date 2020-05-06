# (TV Guide)

A "TV guide" website that uses an API, and few pages to display what is currently showing.

# Objectives

- Work with an API to display data
- Work with React and React Router
- Use React Router to create the pages

# Includes

- [REACT](https://reactjs.org/docs/getting-started.html)
- [REACT ROUTER DOM](https://www.npmjs.com/package/react-router-dom)
- [FUNCTIONAL COMPONENTS](https://reactjs.org/docs/components-and-props.html)
- [HOOKS](https://reactjs.org/docs/hooks-intro.html)
- [REACT OVERDRIVE](https://github.com/berzniz/react-overdrive)
- [STYLED COMPONENTS](https://styled-components.com/)
- [AXIOS](https://github.com/axios/axios)

# Requirements

- Use [The Movie Db](https://developers.themoviedb.org/3/getting-started/introduction) API
- Create a home page that has:
  - the list of all "Top Rated" TV shows, returned from this API https://api.themoviedb.org/3/tv/top_rated?api_key=<<api_key>>&language=en-US&page=1
  - this page should also highlight a random "Top Rated" TV show at the top of the page
- Create a /tv/:showId page that shows all the details for a given show and the cast of the show. The cast and crew end point is https://api.themoviedb.org/3/tv/{tv_id}/credits?api_key=<<api_key>>&language=en-US

# Featured Code

```JSX
const ShowDetail = (props) => {
  const showId = props.match.params.id

  const [show, setShow] = useState({})
  const [actors, setActors] = useState([])

  const POSTER_PATH = 'http://image.tmdb.org/t/p/w154'
  const BACKDROP_PATH = 'http://image.tmdb.org/t/p/w1280'

  const getTVShow = async () => {
    const cast = await axios.get(
      `https://api.themoviedb.org/3/tv/${showId}/credits?api_key=88859848d50c55f203e248f5a006929e&language=en-US`
    )

    setActors(cast.data.cast)

    const showInfo = await axios.get(
      `https://api.themoviedb.org/3/tv/${showId}?api_key=88859848d50c55f203e248f5a006929e&language=en-US`
    )

    setShow(showInfo.data)
  }

  useEffect(() => {
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
              <p>First Aired:</p>
              <h3>{moment(show.first_air_date).format('MMM Do YY')}</h3>
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
```

# Live Site

- [LIVE SITE](https://tv-guide-sam.netlify.app/)
