import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import A from './common/A'

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

const Nav = () => {
  return (
    <Ul>
      <li>
        <Link to='/' component={A}>home</Link>
      </li>
      <li>
        <Link to='/about' component={A}>about</Link>
      </li>
      <li>
        <Link to='/portfolio' component={A}>portfolio</Link>
      </li>
      <li>
        <Link to='/contact' component={A}>contact</Link>
      </li>
    </Ul>
  )
}

export default Nav