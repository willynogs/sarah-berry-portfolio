import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import A from './common/A'

const Container = styled.div`
  position: sticky;
  top: 0px;
  z-index: 100;
`

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: #fff;
`

const GradientBottom = styled.div`
  background: rgb(255,255,255);
  background: -moz-linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(0,212,255,0) 100%);
  background: -webkit-linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(0,212,255,0) 100%);
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(0,212,255,0) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#00d4ff",GradientType=1);
  height: 25px;
`

const H1 = styled.h1`
  margin: 0;
`

const NavItem = styled(Link)`
  margin-right: 10px;
`

const Nav = () => {
  return (
    <Container>
      <NavContainer>
        <H1>SARAH BERRY</H1>
        <div>
          <NavItem to='/about' component={A}>bio</NavItem>
          <NavItem to='/projects-home' component={A}>projects</NavItem>
          <NavItem to='/contact' component={A}>contact</NavItem>
        </div>
      </NavContainer>
      <GradientBottom />
    </Container>
  )
}

export default Nav