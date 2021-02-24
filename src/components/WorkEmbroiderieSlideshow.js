import React, { useState } from 'react'
import { Slide } from 'react-slideshow-image'
import A from './common/A'
import Slide1 from '../assets/work-emroideries/ATI Paris 2020_Bath & Kitchen_Artwork_8.9.19_SB.jpg'
import Slide2 from '../assets/work-emroideries/ATI Christmas 2020_Farmhouse Christmas_Artwork_12.16.19_SB.jpeg'
import Slide3 from '../assets/work-emroideries/At Home Deco Days 2020_2pk KT_Artwork_7.9.19_SB.jpeg'
import Slide4 from '../assets/work-emroideries/ATI Camping & Adventure 2021 Boardz.jpg'
import Slide5 from '../assets/work-emroideries/ATI Easter 2022_Easter Is Here Embroideries_1.25.21_SB.jpg'
import Slide6 from '../assets/work-emroideries/ATI Spring 2021 Board_SB_3.18.20.jpg'
import Slide7 from '../assets/work-emroideries/citi trends back to school wash.jpg'

const slideImages = [
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
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
