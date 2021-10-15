import React, { useState } from 'react'
import { Slide } from 'react-slideshow-image'
import A from './common/A'
import Slide1 from '../assets/print-designs/bumble-bees.png'
import Slide2 from '../assets/print-designs/butterflies.png'
import Slide3 from '../assets/print-designs/daisies.png'
import Slide4 from '../assets/print-designs/fall-florals.png'
import Slide5 from '../assets/print-designs/florals.png'
import Slide6 from '../assets/print-designs/lavender.png'
import Slide7 from '../assets/print-designs/lemons.png'
import Slide8 from '../assets/print-designs/mushrooms.png'
import Slide9 from '../assets/print-designs/texas-florals.png'
import Slide10 from '../assets/print-designs/veggies.png'

const slideImages = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
  Slide9,
  Slide10,
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
