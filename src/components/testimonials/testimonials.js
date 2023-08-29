import React, { useState } from 'react';
import "./testimonials.css"
import imgOne from "../assets/ivana.jpg"
import imgTwo from "../assets/aiony.jpg"
const testimonials = () => {
    const [index, setIndex] = useState(0);
  return (
    <div id="testimonials">
      <div className="container">
      <h1>
      What our customers say about us
      </h1>


      </div>
        <div className="card-row">
        <div className="card-section" >
<div >
    <img src={imgOne} alt=""className="img-test" />
    

 </div>
        
        <div className=' section card-item'>
        <div className='stars'> ⭐⭐⭐⭐⭐ </div>
        
             <h2>Lioness M</h2>
             <p> Its beautiful place.. Lovly creative tasty cakes.. Doughnuts are die for... Even with 1kg you can get designer cakes... I always buy cakes there for any function in my house</p>
          </div>
          </div>
          <div className="card-section">
          <div >
    <img src={imgOne} alt=""className="img-test" />
</div>
         <div className=' section card-item'>
         <div className='stars'> ⭐⭐⭐⭐⭐ </div>
             <h2>Vinodhini
Rajasekhar </h2>
<p>Most suitable place for low budget foodie. Price is reasonable and it is served properly.I ate french fries and sandwich which tasted good here.</p>
            </div>
            </div>
            <div className="card-section">
            <div >
    <img src={imgOne} alt=""className="img-test" />
</div>
            <div className='section card-item'>
            <div className='stars'> ⭐⭐⭐⭐⭐ </div>
             <h2>Manivannan Kamaraj</h2>
<p>Has become my regular place to by cakes. Wonderful taste and economical price compared to other cake shops.</p>
            </div>
            </div>
            <div className="card-section">
            <div >
    <img src={imgOne} alt=""className="img-test" />
</div>
            <div className='section card-item'>
            <div className='stars'> ⭐⭐⭐⭐⭐ </div>
             <h2>Babu Kiruba</h2>
<p>Its a good place for a budget foodie, things are good, i l9ve brownies with ice cream, and those hot chicken burger r ma choice here..</p>
            </div>
            </div>
            <div className="card-section">
            <div >
    <img src={imgOne} alt=""className="img-test" />
</div>
            <div className='section card-item'>
            <div className='stars'> ⭐⭐⭐⭐⭐ </div>
             <h2>Jeevitha</h2>
<p>My favorite place. It has fresh cakes with catalog which design u want to put on your cake. I like La Bakery very much amazing decorations.</p>
            </div>
            </div>
           
        </div>
      
    </div>
  )
}

export default testimonials
