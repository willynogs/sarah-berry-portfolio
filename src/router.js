import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import CompletedClasses from './components/CompletedClasses'
import FirstProject from './components/FirstProject'
import Contact from './components/Contact'

const Router = () => {
  const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `

  return (
    <BrowserRouter>
      <Nav />
      <ContentWrapper>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/resume' exact component={Resume} />
          <Route path='/portfolio' exact component={Portfolio} />
          <Route path='/completed-fashion-courses' exact component={CompletedClasses} />
          <Route path='/first-project' exact component={FirstProject} />
          <Route path='/contact' exact component={Contact} />
        </Switch>
      </ContentWrapper>
    </BrowserRouter>
  )
}

export default Router