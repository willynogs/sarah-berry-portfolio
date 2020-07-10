import React from 'react'
import styled from 'styled-components'
import Router from './router'

const BodyWrapper = styled.div`
  height: 80vh;
  width: 80vw;
  padding: 10vh 10vw;
  background: palegoldenrod;
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