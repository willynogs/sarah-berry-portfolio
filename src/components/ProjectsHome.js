import React from 'react'
import { Link } from 'react-router-dom'
import A from './common/A'

const ProjectsHome = () => {
  return (
    <>
      <Link to='/work-embroideries' component={A}>work embroideries</Link>
      <Link to='/work-prints' component={A}>work prints</Link>
      <Link to='/personal-projects' component={A}>personal projects</Link>
      <Link to='/completed-fashion-courses' component={A}>completed fashion courses</Link>
    </>
  )
}

export default ProjectsHome
