import React from 'react'
import "./gallery.css"
import Bt4 from '../assets/bt4.png'
import Jeswin from '../assets/jeswin.png'
import Vector2 from '../assets/Vector2.png'
import Cake3 from '../assets/cake 3.png'
import gcake from '../assets/g-cake.png'
import Chef2 from '../assets/chef-2.png'
import Endcake from '../assets/end cake.png'
import pizza3 from '../assets/pizza3.png'
import juice from "../assets/Juice.png"
import pasta2 from "../assets/pasta 2.png"
const gallery = () => {
  return (
    <div id="gallery">
   
    <div className="wrapper">
    <h1>GALLERY</h1>
     </div>
   
  
   <div className='  stacked box1'>
   <img src={Vector2} alt="" />
  
   {/* <p>Fresh Fast Delicious</p> */}
  
  
  
</div>


<div className='box2'>
   <img src={gcake} alt="" />
   </div>
   <div className=' box box3'>
 <p>"Life is a combination of magic & paste"</p>
 </div>
 <div className='box4'>
  <img src={Chef2} alt="" />
  
 </div>
 <div className="box5">
  <img src={Endcake} alt="" />
  
 
 </div>
  <div className=" box6">
   <p> Discount 50% off</p> 
  </div>
  <div className=" box box7">
   <p>Food for us come from our relative</p> 
  </div>
  <div className="box8">
    <img src={pizza3} alt="" />
  </div>
  <div className="box9">
    <img src={juice} alt="" />
  
  </div>
  <div className="box10">
    <img src={pasta2} alt="" />
  
  
  </div>
    </div>
  )
}

export default gallery
