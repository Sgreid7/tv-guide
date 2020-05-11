import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Actors from './pages/Actors'
import ShowDetail from './components/ShowDetail'
import ActorDetail from './components/ActorDetail'
import NotFound from './pages/NotFound'
import Nav from './components/Nav'

const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/:id" component={ShowDetail}></Route>
        <Route exact path="/actors" component={Actors}></Route>
        <Route exact path="/actor:id" component={ActorDetail}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
