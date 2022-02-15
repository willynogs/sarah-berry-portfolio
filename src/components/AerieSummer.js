import React, { useState } from 'react'
import { Slide } from 'react-slideshow-image'
import A from './common/A'
import Slide1 from '../assets/aerie-summer/Aerie Girl.png'
import Slide2 from '../assets/aerie-summer/Aerie Summer 2023 2.png'

const slideImages = [
  Slide1,
  Slide2,
]

const AerieSummer = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const properties = {
    duration: 30000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (oldIndex, newIndex) => setCurrentSlide(newIndex)
  }

  return (
    <>
      <A href={slideImages[currentSlide]} target='_blank' rel='noopener noreferrer'>view image fullscreen</A>
      <div className="slide-container">
        <Slide {...properties}>
          {slideImages.map((image, index) => {
            return (
              <div className="each-slide" key={`slide-${index}`}>
                <div>
                  <img src={image} alt='portfolio slide' />
                </div>
              </div>
            )
          })}
        </Slide>
      </div>
    </>
  )
}

export default AerieSummer
