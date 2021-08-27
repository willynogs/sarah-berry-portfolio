import React from 'react'
import styled from 'styled-components'
import PersonalSlideshow from './PersonalSlideshow'

const P = styled.p`
  max-width: 80%;
  text-align: center;
`

const PersonalProjects = () => {
  return (
    <React.Fragment>
      <P>
        To show my creative skills and eye for fashion and color trends, I have designed summer 2021 prints for 2 clothing brands: Abercrombie & Fitch and For Love & Lemons. I began the project by browsing Abercrombie’s and For Love & Lemons websites to get a feel for each brand’s aesthetic. Abercrombie has a more laid back appeal with a neutral color palette while For Love & Lemons is more vibrant, frilly and feminine. From there, I researched trending pantones for Summer 2021 and pulled together color stories that tied into each brand. I compiled my findings into a trend board and used it as a reference to help guide my design process.
      </P>
      <PersonalSlideshow />
    </React.Fragment>
  )
}

export default PersonalProjects
