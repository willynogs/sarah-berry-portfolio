import React from 'react'
import styled from 'styled-components'
import Router from './router'
import BGImage from './assets/daisy print.jpg'

const BodyWrapper = styled.div`
  height: 90vh;
  width: 90vw;
  padding: 5vh 5vw;
  background: url("${BGImage}") no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`

const ContentWrapper = styled.div`
  height: 100%;
  width: 100%;
  box-shadow: 0px 0px 20px #999;
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