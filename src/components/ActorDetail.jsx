import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const ActorDetail = (props) => {
  const id = props.match.params.id

  const [actor, setActor] = useState({})
  const [actorInfo, setActorInfo] = useState({})

  const getActor = async () => {
    const resp = await axios.get(
      `https://api.themoviedb.org/3/person/${id}?api_key=88859848d50c55f203e248f5a006929e&language=en-US`
    )

    console.log(resp)
  }

  useEffect(() => {
    getActor()
  }, [])

  return (
    <div>
      <h1>IN PROGRESS</h1>
    </div>
  )
}

export default ActorDetail
