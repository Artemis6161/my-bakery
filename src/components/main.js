import React from 'react'
import Menu from "./menu/menu"
import About from "./about/about"
import Gallery from "./gallery/gallery"
import Navbar from './navbar/navbar'
import Contact from './contact/conatct'
import Signup from './signup/signup'
import Home from "./home/home"
import Intro from "./intro/intro.js"
import Testimonials from './testimonials/testimonials'
const main = () => {
  return (
    <div className='main'>
    <Navbar/>
  <Intro/>
    {/* <Home/> */}
      <Menu/>
    
      <About/>
      <Gallery />
      <Testimonials/>
      <Contact />
      <Signup/>
    </div>
  )
}

export default main
