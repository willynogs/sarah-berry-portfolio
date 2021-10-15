import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import ProjectsHome from './components/ProjectsHome'
import GraphicDesign from './components/GraphicDesign'
import PrintDesign from './components/PrintDesign'
import PersonalProjects from './components/PersonalProjects'
import CompletedClasses from './components/CompletedClasses'
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
          <Route path='/projects-home' exact component={ProjectsHome} />
          <Route path='/personal-projects' exact component={PersonalProjects} />
          <Route path='/graphic-design' exact component={GraphicDesign} />
          <Route path='/print-design' exact component={PrintDesign} />
          <Route path='/completed-fashion-courses' exact component={CompletedClasses} />
          <Route path='/contact' exact component={Contact} />
        </Switch>
      </ContentWrapper>
    </BrowserRouter>
  )
}

export default Router