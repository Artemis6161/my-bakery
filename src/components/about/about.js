import React from 'react'
import "./about.css"
import menu from "../assets/pngwing 21.png"
const about = () => {
  return (
    <div id="about">
   

    <div className="top-about">
       <button className="btn one title">
     <i class="fa-solid fa-utensils icons"></i>
         ABOUT
          </button>
          </div>
    
    <div className='container-about'>
    <div className="left-about">
     <img src={menu} alt="" />
     </div>
<div className="right-about">

<div className='about-as'>
<h1>Discover Our
Story</h1>
<p>La bakery & confectionery was started by Mr D. Vijin in the year 2010. Initially we started our business in a small level and supplied to our neighbors, friends & relatives. As days passed by the number of customers was booming. Yes, the taste, varieties, price helped us achieve this milestone. Now we have five outlets in Ambatur, Thirumullaivoyal, Avadi, Poompozilnagar and Mugapair. We undertake orders for Birthdays, Weddings & all occasions.</p>
</div>
</div>

</div>

    
  
    </div>
  )
}

export default about
