import React, { useState } from 'react'
import { Slide } from 'react-slideshow-image'
import A from './common/A'
import Slide1 from '../assets/graphic-design-embroideries/Burlington-Pride.png'
import Slide2 from '../assets/graphic-design-embroideries/ATI-Halloween.png'
import Slide3 from '../assets/graphic-design-embroideries/Burlington-Social-Respect.png'
import Slide4 from '../assets/new-work-emroideries/Live-Happy-Embroideries.png'
import Slide5 from '../assets/new-work-emroideries/Beauty-Embroideries.png'
import Slide6 from '../assets/new-work-emroideries/Spring-Embroideries.png'
import Slide7 from '../assets/new-work-emroideries/Texas.png'
import Slide8 from '../assets/graphic-design-embroideries/ATI-Camping.png'
import Slide9 from '../assets/graphic-design-embroideries/ATI-Easter.png'
import Slide10 from '../assets/graphic-design-embroideries/ATI-Tropical.png'
import Slide11 from '../assets/graphic-design-embroideries/Big-Lots-Xmas.png'
import Slide12 from '../assets/graphic-design-embroideries/DDs-Hispanic-Heritage.png'
import Slide13 from '../assets/graphic-design-embroideries/DDs-Ocean-Breeze.png'

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
  Slide11,
  Slide12,
  Slide13,
]

const WorkEmbroiderieSlideshow = () => {
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

export default WorkEmbroiderieSlideshow
