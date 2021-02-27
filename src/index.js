import React from 'react'
import ReactDOM from 'react-dom'
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom'
import App from './App'
import './resources/index.scss'

const mainSite = (
  <Router>
    <Switch>
      <Route path='/' exact component={App} />
      <Redirect to='/' />
    </Switch>
  </Router>
)
ReactDOM.render(mainSite, document.getElementById('root'))
