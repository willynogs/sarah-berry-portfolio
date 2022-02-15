import React from 'react'
import styled from 'styled-components'
import ViewMoreText from './ViewMoreText'
import PersonalGifSlideshow from './PersonalGifSlideshow'
import PersonalSlideshow from './PersonalSlideshow'
import AerieSummer from './AerieSummer'
import AerieHoliday from './AerieHoliday'

const P = styled.p`
  max-width: 80%;
  text-align: center;
`

const PersonalProjects = () => {
  return (
    <React.Fragment>
      <h1>Personal Projects {'&'} Artwork</h1>

      <ViewMoreText
        mainText="This is a mood board project I created that's focused on Aerie's aesthetic for the Summer 2023 season. I included inspirational images that represent the Aerie girl as well as product tears, fabric, print and color inspiration."
        additionalText="During Summer of 2023, the Aerie girl will be focusing on connecting with nature and seeking new experiences. She has always loved the outdoors but has found a new appreciation for what the earth has to offer in the years since the pandemic began. The Aerie girl plans on going on a solo backpacking trip to discover new places and herself. Mental health, environmental issues and treating her body well are priorities that she will focus on during this adventure. Her bags are packed and she's ready to hit the road. She's bringing her most comfortable and versatile apparel, mostly made from natural materials with textures inspired by the organic shapes of nature. Her wardrobe consists of neutral earth tones with bold pops of playful colors that represent optimism."
      />
      <AerieSummer />
      <P>
      This is a capsule collection I created that's focused on Aerie's aesthetic for the Holiday 2023 season. I created mood boards, a seasonal color palette, included textiles relevant to the season/Aerie customer and designed prints and CAD's.
      </P>
      <AerieHoliday />
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
