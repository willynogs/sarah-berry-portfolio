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
        To show my creative skills and eye for fashion and color trends, I have designed prints and patterns for 2 different brands: Abercrombie & Fitch and For Love and Lemons. I pulled together pantones and styles that matched each brand's aesthetic. Abercrombie has a more laid back appeal with more neutral colors while For Love and Lemons is more vibrant and feminine. I based my designs off of what I projected to be summer 2021 trends.
      </P>
      <PersonalSlideshow />
    </React.Fragment>
  )
}

export default PersonalProjects
