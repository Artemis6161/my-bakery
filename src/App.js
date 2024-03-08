import React from 'react'


import Main from "./components/main"

import Gallery from "./components/gallery/gallery"
import About from "./components/about/about"
import Contact from "./components/contact/conatct"
import Signup from "./components/signup/signup"
import Menu from "./components/menu/menu"
import Navbar from './components/navbar/navbar'
import Address from "./components/address/address"
import "../src/App.css"
import {
  
  Routes,
  Route,
  BrowserRouter,
 
} from "react-router-dom";


const App = () => {
  return (
    <div className='app'>
     
  

    <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* <Navbar /> */}
    
      <Routes>
      
       
          <Route path="/" element={<Main/>}></Route>
          {/* <Route path="/" element={<Home/>}></Route> */}
          <Route path="about" element={<About/>}></Route>
          <Route path="menu" element={<Menu/>}></Route>
          <Route path="gallery" element={<Gallery/>}></Route>
          <Route path="contact" element={<Address/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
       
        </Routes>
   
      </BrowserRouter>
  
    </div>
  )
}

export default App;