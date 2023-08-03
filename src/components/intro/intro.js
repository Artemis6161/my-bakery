import React from 'react'
import "./intro.css"
import img from "../assets/v33_7715.png"
import leaf2 from "../assets/pngwing 14.png"
import one from "../assets/Meal-PNG-Download-Image 2.png"
import two from "../assets/pngfind 1.png"
import three from "../assets/Meal-PNG-Download-Image 1.png"
import pepper from "../assets/pngwing 16.png"
import leaf from "../assets/leaf.png"
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
const dummy = () => {
  return (
    
    <div className='continer'>
      <div className="left">
      <h1 >It's not just a Food</h1>
<h2>It's a Expirence!</h2>
<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ipsa, natus ea perspiciatis alias, reiciendis illo! Sunt vero blanditiis excepturi sed dignissimos dicta. </p>
<button className="btn two">
          <Link to="menu" spy={true} smooth={true} offset={50} duration={500}>
          <i class="fa-solid fa-utensils icons"></i>OUR MENU</Link>
          </button>
          <button className="btn two gap">
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
          <i class="fa-regular fa-message icons"></i> ABOUT US</Link>
          </button>
      </div>

      <div className="right">
     
    
    <span>
  
  </span>
   <img src={pepper} alt="" className='pepper'/>
  <img src={img} alt="" className='pizza'/>
   
 
  

  <img src={leaf2} alt="" />
<img src={one} alt="" />
<img src={two} alt="" />
<img src={three} alt="" />
      </div>
    </div>
    
  )
}

export default dummy
