import React from 'react'
import "./carousel.css"

import slide_image_2 from "../assets/pasta-menu.png"
import slide_image_3 from '../assets/1pizza.png'
import slide_image_4 from '../assets/2pizza.png'
import slide_image_5 from "../assets/3pizza.png"
import slide_image_6 from "../assets/pasta2.png"

const carousels = () => {
  return (
    <div className='carousel-sticky'>
{/* <div className='image-bg'>
     
     </div> */}
      
       <div className='carousel'>
      
      <img src={slide_image_2} alt="slide_image" />
      <img src={slide_image_3} alt="slide_image" />
      <img src={slide_image_4} alt="slide_image" />
      <img src={slide_image_5} alt="slide_image" />
      <img src={slide_image_6} alt="slide_image" />

      </div>

     
      
    </div>
  )
}

export default carousels

