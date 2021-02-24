import React, { useState } from 'react'
import { Slide } from 'react-slideshow-image'
import A from './common/A'
import Slide1 from '../assets/work-prints/fall 2021 towel prints.jpg'
import Slide2 from '../assets/work-prints/PET PRINTS.jpg'
import Slide3 from '../assets/work-prints/SPRING PRINTS.jpg'
import Slide4 from '../assets/work-prints/TEXAS PRINTS.jpg'

const slideImages = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
]

const WorkPrintSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const properties = {
    duration: 30000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
    onChange: (_oldIndex, newIndex) => setCurrentSlide(newIndex)
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

export default WorkPrintSlideshow
