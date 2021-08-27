import React from 'react'
import styled from 'styled-components'
import familyPic from '../assets/family-pic.png'

const P = styled.p`
  max-width: 80%;
  text-align: center;
`

const Img = styled.img`
  max-width: 60vw;
`

const About = () => {
  return (
    <>
      <h1>hello!</h1>
      <P>
        I’m Sarah Berry, a Columbus based graphic and textile designer who is passionate about brand building, visual storytelling, and creative thinking. When I’m not designing, you can find me hiking, eating ice cream or spending time with my boyfriend, Will and our two dogs, Penelope and Merlin.
      </P>
      <Img src={familyPic} alt='Sarah with her boyfriend and dogs' />
      <P>
        I discovered my passion for creativity and design while gaining my bachelor’s degree in Fashion & Retail at the Ohio State University. In my Aesthetics of Fashion & Retail class, I learned basic photoshop skills and was able to explore the creative side of the fashion industry. I was immediately intrigued and excited about design, which guided me to the position I am in today. Currently, I am the Design Manager at American Textile Industries. I began my experience with ATI as an intern excited to grow as a designer. I devoted a lot of my time learning how to think outside of the box, which showed through my unique and innovative designs. I became a full time designer upon graduation and was soon promoted to Design Manager. I feel so fortunate and accomplished to be in the position I am today and will continue to push myself to grow and achieve my creative goals.
      </P>
    </>
  )
}

export default About