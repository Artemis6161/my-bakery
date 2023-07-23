import React from 'react'
import Menu from "./menu/menu"
import About from "./about/about"
import Gallery from "./gallery/gallery"
import Navbar from './navbar/navbar'
import Contact from './contact/conatct'
import Signup from './signup/signup'
import Home from "./home/home"
const main = () => {
  return (
    <div>
    <Navbar/>
    <Home/>
      <Menu/>
      <About/>
      <Gallery />
      <Contact />
      <Signup/>
    </div>
  )
}

export default main
