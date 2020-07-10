import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import A from './common/A'

const Ul = styled.ul`
  list-style-type: none;
  margin: 15px auto 15px auto;
  padding: 0;
  display: table;
`

const Nav = () => {
  return (
    <Ul>
      <li>
        <Link to='/' component={A}>home</Link>
      </li>
      <li>
        <Link to='/about' component={A}>biography</Link>
      </li>
      <li>
        <Link to='/Resume.pdf' target='_blank' rel='noopener noreferrer' component={A}>resume</Link>
      </li>
      <li>
        <Link to='/portfolio' component={A}>portfolio</Link>
      </li>
      <li>
        <Link to='/completed-fashion-courses' component={A}>completed fashion courses</Link>
      </li>
      <li>
        <Link to='/first-project' component={A}>first project</Link>
      </li>
      <li>
        <Link to='/contact' component={A}>contact</Link>
      </li>
    </Ul>
  )
}

export default Nav