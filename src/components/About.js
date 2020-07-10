import React from 'react'
import styled from 'styled-components'
import headshot from '../assets/headshot.jpg'

const P = styled.p`
  max-width: 80%;
  text-align: center;
`

const Img = styled.img`
  max-width: 250px;
`

const About = () => {
  return (
    <>
      <h1>hello!</h1>
      <Img src={headshot} alt='Headshot of Sarah Berry' />
      <P>
        I’m Sarah Berry, Fashion & Retail Studies major at the Ohio State University. I am currently a senior and will be
        graduating with a bachelor's degree in August 2021. Throughout my undergraduate experience, I have discovered
        my passion for fashion and design. In my Aesthetics of Fashion & Retail class, I learned basic photoshop skills and
        was able to explore the creative side of the fashion industry. I was immediately intrigued and excited about design,
        which guided me to the position I am in today. Currently, I am a graphic design intern for American Textile
        Industries. Mainly, I design graphics and patterns that are to be embroidered on towels. I additionally design
        packaging, create trend boards and assess lab dips. I love what I do and I will continue to push myself to enhance
        my design knowledge and skills.
      </P>
    </>
  )
}

export default About