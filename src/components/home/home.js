import React from 'react'
// import "./home.css"
import img from "../assets/v33_7715.png"
import leaf2 from "../assets/pngwing 14.png"
import one from "../assets/Meal-PNG-Download-Image 2.png"
import two from "../assets/pngfind 1.png"
import three from "../assets/Meal-PNG-Download-Image 1.png"
import pepper from "../assets/pngwing 16.png"
import leaf from "../assets/leaf.png"
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
const home = () => {
  return (
    <div id="home">
     <div className="i-left">
     
     <h1 classname="head">It's not just a Food</h1>
<h2>It's a Expirence!</h2>
<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ipsa, natus ea perspiciatis alias, reiciendis illo! Sunt vero blanditiis excepturi sed dignissimos dicta. </p>
    


<button className="btn two">
          <Link to="menu" spy={true} smooth={true} offset={50} duration={500}>
          <i class="fa-solid fa-utensils icons"></i>OUR MENU</Link>
          </button>
          <button className="btn two">
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
          <i class="fa-regular fa-message icons"></i> ABOUT US</Link>
          </button>



          {/* <img src={leaf} alt="" className='leaf'/> */}
     </div>
     <div className="i-right">
  
          <img src={pepper} alt="" className='pepper'/>
  
     <span>
     
     </span>

     <img src={img} alt="" className='pizza'/>
     <img src={leaf2} alt="" />
<img src={one} alt="" />
<img src={two} alt="" />
<img src={three} alt="" />

     </div>
    </div>
  )
}

export default home
