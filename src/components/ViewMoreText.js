import React, { useState } from 'react'
import styled from 'styled-components'

const P = styled.p`
  max-width: 80%;
  text-align: center;
`
const Button = styled.p`
  cursor: pointer;
  text-decoration: underline;
  margin-top: 0;
`

const ViewMoreText = ({ mainText, additionalText }) => {
  const [showMoreText, setShowMoreText] = useState(false)

  return (
    <>
      <P>{mainText}</P>
      {!showMoreText && (
        <Button onClick={() => setShowMoreText(true)}>view more</Button>
      )}
      {showMoreText && (
        <>
          <P>{additionalText}</P>
          <Button onClick={() => setShowMoreText(false)}>view less</Button>
        </>
      )}
    </>
  )
}

export default ViewMoreText
