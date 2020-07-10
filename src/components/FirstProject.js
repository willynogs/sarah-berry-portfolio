import React from 'react'
import styled from 'styled-components'
import petboard from '../assets/pet-board.jpg'

const P = styled.p`
  max-width: 80%;
  text-align: center;
`

const Img = styled.img`
  max-width: 90%;
  width: 500px;
`

const FirstProject = () => {
  return (
    <>
      <Img src={petboard} alt='Pet towel board' />
      <P>
      My very first project working as a graphic designer was to design several pet graphics to be embroidered on
      towels. This collection wasn’t for any specific client, just our general American Textile Industries line. This means
      buyers from all companies we work with can pick and choose which designs they want (if any) that would fit their
      target customer’s aesthetic. This was definitely a challenge for me not only because I was inexperienced, but the
      details of the project were vague, which left me in charge of a lot of creative direction. However, with several
      questions, tons of research, and helpful tips from the design team, I was able to create a design board full of pet

      designs that were “buyer approved” in my manager’s eye. My current portfolio demonstrates how much I have
      improved as a designer since this project.
      </P>
    </>
  )
}

export default FirstProject