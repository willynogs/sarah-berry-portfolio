import React, { useState } from 'react'
import { Slide } from 'react-slideshow-image'
import A from './common/A'

import Slide1 from '../assets/new-work-emroideries/Love-is-Love.png'
import Slide2 from '../assets/new-work-emroideries/back-to-school-emb.png'
import Slide3 from '../assets/new-work-emroideries/Live-Happy-Embroideries.png'
import Slide4 from '../assets/new-work-emroideries/Beauty-Embroideries.png'
import Slide5 from '../assets/new-work-emroideries/Beauty-Washcloths.png'
import Slide6 from '../assets/new-work-emroideries/Camping embroideries.png'
import Slide7 from '../assets/new-work-emroideries/Camping Prints.png'
import Slide8 from '../assets/new-work-emroideries/Halloween-emb.png'
import Slide9 from '../assets/new-work-emroideries/Social-Respect-&-Kindness-Embroideries.png'
import Slide10 from '../assets/new-work-emroideries/Ocean-Breeze.png'
import Slide11 from '../assets/new-work-emroideries/coastal-xmas-embroideries.png'
import Slide12 from '../assets/new-work-emroideries/coastal-xmas-washcloths.png'
import Slide13 from '../assets/new-work-emroideries/Easter-emb-Jesse-Fouta.png'
import Slide14 from '../assets/new-work-emroideries/Easter-embroideries.png'
import Slide15 from '../assets/new-work-emroideries/farmhouse-xmas-emb.png'
import Slide16 from '../assets/new-work-emroideries/Hispanic-Heritage.png'
import Slide17 from '../assets/new-work-emroideries/Paris-emb.png'
import Slide18 from '../assets/new-work-emroideries/Spring-Embroideries.png'
import Slide19 from '../assets/new-work-emroideries/Texas.png'
import Slide20 from '../assets/new-work-emroideries/Tropical 3pc Sets.png'
import Slide21 from '../assets/new-work-emroideries/Tropical-Embroideries.png'
import Slide22 from '../assets/new-work-emroideries/Tropical-Monogram.png'

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
  Slide14,
  Slide15,
  Slide16,
  Slide17,
  Slide18,
  Slide19,
  Slide20,
  Slide21,
  Slide22,
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
