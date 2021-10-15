import React from 'react'
import styled from 'styled-components'
import PersonalGifSlideshow from './PersonalGifSlideshow'
import PersonalSlideshow from './PersonalSlideshow'

const P = styled.p`
  max-width: 80%;
  text-align: center;
`

const PersonalProjects = () => {
  return (
    <React.Fragment>
      <h1>Personal Projects {'&'} Artwork</h1>
      <P>
        These drawings represent my personal design style. I have a very fluid and feminine hand drawing aesthetic and love organic, abstract shapes. I paired my drawings with bold and dreamy colorways that compliment each of their playful personalities.
      </P>
      <PersonalGifSlideshow />
      <P>
        To show my creative skills and eye for fashion and color trends, I have designed summer 2021 prints for 2 clothing brands: Abercrombie & Fitch and For Love & Lemons. I began the project by browsing Abercrombie’s and For Love & Lemons websites to get a feel for each brand’s aesthetic. Abercrombie has a more laid back appeal with a neutral color palette while For Love & Lemons is more vibrant, frilly and feminine. From there, I researched trending pantones for Summer 2021 and pulled together color stories that tied into each brand. I compiled my findings into a trend board and used it as a reference to help guide my design process.
      </P>
      <PersonalSlideshow />
    </React.Fragment>
  )
}

export default PersonalProjects
