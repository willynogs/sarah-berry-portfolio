import React from 'react'
import WorkEmbroiderieSlideshow from './WorkEmbroiderieSlideshow'
import WorkPrintSlideshow from './WorkPrintSlideshow'

const WorkProjects = () => {
  return (
    <React.Fragment>
      <h1>Embroideries</h1>
      <WorkEmbroiderieSlideshow />
      <h1>Prints</h1>
      <WorkPrintSlideshow />
    </React.Fragment>
  )
}

export default WorkProjects