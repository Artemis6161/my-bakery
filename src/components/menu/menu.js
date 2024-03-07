import React from 'react'
import "./menu.css"
import image1 from '../assets/cake.png'
import image2 from '../assets/sandwich.png'
import image3 from '../assets/burger.png'
import image4 from '../assets/pizza.png'
import pizza1 from '../assets/pizza 1 menu.png'
import pasta from '../assets/pasta-menu.png'
import fruity from '../assets/Fruity-Chocolate-Cake-menu.png'
import Carousels from "./carousels"


import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
const Menu = () => {
  return (
    <div id="menu">
    <div className='top'>
   <button className="btn one title">
     <i class="fa-solid fa-utensils icons"></i>
         Our Menu
          </button>
          <h1>
    Eat Fresh & Healthy
    </h1>
 
          
<div className="top-bar">
<img src={image1} alt="" />
<span>Cake & pastries</span>
<img src={image2} alt="" />
<span >sandwich</span>
<img src={image3} alt="" />
<span>Burger</span>
<img src={image4} alt="" />
<span>Pizza</span>
</div>
   </div>
  
  

<div className="card-container">

<div className="card">
<div className='img'>
<img src={pizza1} alt="pizza" />
</div>
<div className='card-item'>
    <h3>Chicken Pizza</h3>
    <p>“Bite into supreme delight of Black Olives, Onions, Grilled Mushrooms, Pepper BBQ Chicken, Peri-Peri Chicken”</p>
    <h4>Rs. 149</h4>
   </div>
   </div>

   <div className="card">
   <div className='img'>
   <img src={pasta} alt="pasta" />
   </div>
  <div className='card-item'>
    <h3>Pasta</h3>
    <p>“Penne pasta in tomato sauce with skinless chicken, pea sprouts, balsamic vinegar, red pepper”</p>
    <h4>Rs. 149</h4>
   </div>
   </div>
   
   <div className="card">
   <div className='img'>
   <img src={fruity} alt="fruity" />
   </div>
   <div className='card-item'>
    <h3>Fruity Chocolate Cake</h3>
    <p>“Chocolate fudge buttercream swirls, fresh raspberries & strawberries”</p>
    <h4>Rs. 149</h4>
   </div>
   </div>

          </div>
         
        

<Carousels/>




         
    </div>
  )
}

export default Menu
