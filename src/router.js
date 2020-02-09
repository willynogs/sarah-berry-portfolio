import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/portfolio' exact component={Portfolio} />
        <Route path='/contact' exact component={Contact} />
      </Switch>
      <Nav />
    </BrowserRouter>
  )
}

export default Router