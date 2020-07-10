import React, { useState } from 'react'
import styled from 'styled-components'
import { Document, Page } from 'react-pdf'

const Resume = () => {
  const [numPages, setNumPages] = useState(null)
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
  }

  const PdfPage = styled(Page)`
    border: 1px solid #222222;
    margin-bottom: 10px;
  `

  return (
    <>
      <Document file={`${process.env.PUBLIC_URL}/Resume.pdf`} onLoadSuccess={onDocumentLoadSuccess}>
      {
        Array.from(
          new Array(numPages),
          (_, index) => (
            <PdfPage
              key={`page_${index + 1}`}
              pageNumber={index + 1}
            />
          ),
        )
      }
      </Document>
    </>
  )
}

export default Resume