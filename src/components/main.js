import React from 'react'
import Menu from "./menu/menu"
import About from "./about/about"
// import Gallery from "./gallery/gallery"
import Navbar from './navbar/navbar'
import Contact from './contact/conatct'
import Signup from './signup/signup'

import Intro from "./intro/intro.js"
import Testimonials from './testimonials/testimonials'
import Address from './address/address.jsx'
import Partners from './partners/partners.js'
import Footer from "./footer/footer.js"
import Carousels from "./menu/carousels.js"
const main = () => {
  return (
    <div className='main'>
    <Navbar/>
  <Intro/>

      <Menu/>
    <Carousels/>
      <About/>
      {/* <Gallery /> */}
      <Testimonials/>
      <Contact />
      <Address/>
      <Partners/>
      <Footer/>
      <Signup/>
    </div>
  )
}

export default main
