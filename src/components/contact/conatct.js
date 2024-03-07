import React from 'react'
import image from "../assets/pngwing 18.png"
import "./contact.css"
const Contact= () => {
  return (
    <div id="gallery">
     <div className="container-contact">
    <h1>Why Choose Us</h1>
    <p>Fresh food is food which has not been preserved and has not spoiled yet. 
For vegetables and fruits</p>
    </div>
    <div className="contact-wrapper">


    <div className="container-left ">
 <div className="container-one ">
 <h3>ALWAYS FRESH</h3>
    <p>
   
Fresh food is food which has not been preserved and has not spoiled yet. 
For vegetables and fruits
</p>
 </div>
 <div className="container-one ">
 <h3>SUPER HEALTHY</h3>
    <p>
   
    Fresh food is food which has not been preserved and has not spoiled yet.
</p>
 </div>
</div>
<div className='center'>

<img src={image} className="contact-image" alt="" />



</div>
    
  
    <div className="container-right ">
    <div className="container-one ">
    <h3>100% NATURAL</h3>
    <p>
   
Fresh food is food which has not been preserved and has not spoiled yet. 
For vegetables and fruits
</p>
    </div>
 
<div className="container-one ">
<h3>PREMIUM QUAILITY</h3>
    <p>
   
    Fresh food is food which has not been preserved and has not spoiled yet. 
</p>
</div>

</div>


</div>
  <div className="contact_input">
<h1>Get a Quote for Franchise</h1>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, maxime.</p>
<div class="input-container">
  <input type="text" placeholder="Enter your text" className='input'/>
  <button type="submit">Submit</button>
</div>


  </div>
    </div>
  )
}

export default Contact