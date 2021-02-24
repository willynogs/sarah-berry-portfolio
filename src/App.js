import React from 'react'
import styled from 'styled-components'
import Router from './router'
import BGImage from './assets/daisy print.jpg'

const BodyWrapper = styled.div`
  height: 80vh;
  width: 80vw;
  padding: 10vh 10vw;
  background: url("${BGImage}") no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`

const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: #fff;
  overflow: scroll;
`

const App = () => {
  return (
    <BodyWrapper>
      <ContentWrapper>
        <Router />
      </ContentWrapper>
    </BodyWrapper>
  )
}

export default App