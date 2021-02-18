import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
  useHistory,
} from "react-router-dom"

const Note = () => {
  return (
    <div>
      <h1>Notes</h1>
    </div>
  )
}

const Home = () => {
  return (
    <div>
      <h1>Home</h1> 
    </div>
  )
}

const User = () => {
  return (
    <div>
      <h1>Users</h1>
    </div>
  )
}


const App = () => {


  return (
    <Router>
      <div>
        <Link to="/">home</Link>
        <Link to="/notes">notes</Link>
        <Link to="/users">users</Link>
      </div>

      <Switch>
        <Route path="/notes">
          <Note/>
        </Route>
        <Route path="/users">
          <User/>
        </Route>
        <Route>
          <Home/>
        </Route>
      </Switch>
    </Router>
  )
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)

export default App