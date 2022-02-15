import React, { useState } from 'react'
import { Slide } from 'react-slideshow-image'
import A from './common/A'
import Slide1 from '../assets/aerie-holiday/Aerie Holiday Title Page.png'
import Slide2 from '../assets/aerie-holiday/Aerie Holiday Inspirational Images.png'
import Slide3 from '../assets/aerie-holiday/Aerie Holiday Color Palette.png'
import Slide4 from '../assets/aerie-holiday/Aerie Holiday Prints.png'
import Slide5 from '../assets/aerie-holiday/Aerie Holiday Garments.png'

const slideImages = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
]

const AerieHoliday = () => {
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

export default AerieHoliday
