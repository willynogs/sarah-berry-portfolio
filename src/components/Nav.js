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
  background: linear-gradient(to top, transparent, #fff);
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