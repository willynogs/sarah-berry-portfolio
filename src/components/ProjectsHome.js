import React from 'react'
import { Link } from 'react-router-dom'
import A from './common/A'

const ProjectsHome = () => {
  return (
    <>
      <Link to='/graphic-design' component={A}>graphic design</Link>
      <Link to='/print-design' component={A}>print design</Link>
      <Link to='/personal-projects' component={A}>{`personal projects & artwork`}</Link>
    </>
  )
}

export default ProjectsHome
