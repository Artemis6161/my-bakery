// import React from 'react'

// import "./footer.css"
// const footer = () => {
//   return (
//     <div className='footer'>
//     <div className='footer_one'>
//     <div className="footer_container">
//     <h1>S'bakery</h1>
//       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, tenetur.
//       </p>
//     </div>
    
// <div className="footer_icons">
// <FaFacebookF  color="#FF8243" fontSize="3em" className='icons'/>
// <FaInstagram color="#FF8243" fontSize="3em" className='icons'/>
// <FaTwitter color="#FF8243" fontSize="3em" className='icons'/>
// </div>
//   <div >
//        <h1> LOCATIONS</h1>
//      </div>

//     </div>
   
//     </div>
//   )
// }

// export default footer

import "./footer.css"
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
export default function footer() {
  return (
    <div className="footer">
          
      <div className="bottom">
      <div className="tops">
            <h1>S'bakery</h1>
     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, tenetur.
       </p>
    
    
 <div className="footer_icons">
 <FaFacebookF  color="#FF8243" fontSize="3em" className='icons'/>
 <FaInstagram color="#FF8243" fontSize="3em" className='icons'/>
 <FaTwitter color="#FF8243" fontSize="3em" className='icons'/>
 </div>
                 </div>
                 <div>
                <h4>LOCATION</h4>
               





              




                <a href="/"> Ambattur</a>
                <a href="/">Avadi</a>
                <a href="/">Thirumullaivoyal</a>
                <a href="/">Poompozilnagar</a>
                <a href="/">Mugapair</a>
                 </div>
                 <div>
                <h4>LINKS</h4>
                <a href="/">  Home</a>
                <a href="/">About</a>
                <a href="/">Menu</a>
               <a href="/">Gallery</a>
               <a href="/">Contact</a>
                 </div>
                 <div>
                <h4>COMPANY</h4>
                <a href="/">Terms of Service</a>
                <a href="/">Privacy Policy</a>
                <a href="/">Cookie Policy</a>
               
                 </div>
            </div>
            <div className="Copyright">
           
            <p>Copyright © 2022 Maddy. All Rights Reserved.</p>
          
       
            </div>
            
    </div>
  )
}

