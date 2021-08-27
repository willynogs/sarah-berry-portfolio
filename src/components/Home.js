import React from 'react'
import styled from 'styled-components'
import headshot from '../assets/headshot.jpg'

const Wrapper = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Img = styled.img`
  max-width: 250px;
`

const H1 = styled.h1`
  text-align: center;
`

const Home = () => {
  return (
    <Wrapper>
      <Img src={headshot} alt='Headshot of Sarah Berry' />
      <H1>GRAPHIC + TEXTILE <br /> DESIGNER</H1>
    </Wrapper>
  )
}

export default Home