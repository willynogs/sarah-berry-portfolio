import React, { useState } from 'react'
import { Slide } from 'react-slideshow-image'
import A from './A'
import Cover from '../../assets/portfolio cover 2.jpg'
import Slide1 from '../../assets/Final Project Collage.jpg'
import Slide2 from '../../assets/dr marten.jpg'
import Slide3 from '../../assets/Big Lots Urban Bungalow_2PK KT_Artwork_1.2.20 DF.jpg'
import Slide4 from '../../assets/ATI Paris 2020_Bath & Kitchen_Artwork_8.9.19_SB.jpg'
import Slide5 from '../../assets/ATI Christmas 2020_Furry Christmas_Artwork_12.12.19_SB.jpeg'
import Slide6 from '../../assets/ATI Christmas 2020_Farmhouse Christmas_Artwork_12.16.19_SB.jpeg'
import Slide7 from '../../assets/At Home Deco Days 2020_2pk KT_Artwork_7.9.19_SB.jpeg'

const slideImages = [
  Cover,
  Slide1,
  Slide2,
  Slide3,
  Slide4,
  Slide5,
  Slide6,
  Slide7,
]

const Slideshow = () => {
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

export default Slideshow
