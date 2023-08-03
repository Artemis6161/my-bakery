import React from 'react'
import Menu from "./menu/menu"
import About from "./about/about"
import Gallery from "./gallery/gallery"
import Navbar from './navbar/navbar'
import Contact from './contact/conatct'
import Signup from './signup/signup'
import Home from "./home/home"
import Dummy from "./dummy/dummy.js"
const main = () => {
  return (
    <div className='main'>
    <Navbar/>
  <Dummy/>
    {/* <Home/> */}
      {/* <Menu/>
    
      <About/>
      <Gallery />
      <Contact />
      <Signup/> */}
    </div>
  )
}

export default main
