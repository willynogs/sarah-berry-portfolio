import React, { useState } from 'react'
import { Slide } from 'react-slideshow-image'
import A from './common/A'
import Slide1 from '../assets/personal-gifs/Sassy Cats.gif'
import Slide2 from '../assets/personal-gifs/Mushrooms.gif'
import Slide3 from '../assets/personal-gifs/Be Kind.gif'
import Slide4 from '../assets/personal-gifs/keep on walkin.gif'
import Slide5 from '../assets/personal-gifs/Cherries.gif'
import Slide6 from '../assets/personal-gifs/Butterfly.gif'
import Slide7 from '../assets/personal-gifs/cool girl.gif'
import Slide8 from '../assets/personal-gifs/Skulls.gif'

const slideImages = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
  Slide8,
]

const PersonalGifSlideshow = () => {
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

export default PersonalGifSlideshow
