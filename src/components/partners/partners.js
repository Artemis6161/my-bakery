import React from 'react'
import "./partners.css"
import swiggy from "../assets/swiggy.png"
import Zomato from "../assets/zomato.png"
import Dineout from "../assets/dineout.png"
import Justdial from "../assets/justdial.png"
import Eazydiner from "../assets/eazydiner.png"
const partners = () => {
  return (
    <div className='patners'>
      <h1>Our Online Partners</h1>
      <div className="partners_continer">
        <img src={swiggy} alt="" />
        <img src={Zomato} alt="" />
        <img src={Dineout} alt="" />
        <img src={Justdial} alt="" />
        <img src={Eazydiner} alt="" />
      </div>
    </div>
  )
}

export default partners
