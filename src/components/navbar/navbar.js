import { useState } from "react";
import "./navbar.css";

import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const Navbar = () =>  {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  return (
    <div className="navbar">
      <div className="nav-left">
      <Link to="home" spy={true} smooth={true} offset={50} duration={500}> S'bakery</Link>
      </div>

      <div className="nav-center" onClick={closeMenu}>
        <ul className={click ? 'topList active' : 'topList'}>

        <li className="topListItem">
          <Link to="menu" spy={true} smooth={true} offset={50} duration={500}> MENU</Link>
          </li>
          <li className="topListItem">

          <Link to="about" spy={true} smooth={true} offset={50} duration={500}> ABOUT</Link>
         </li>
         
          <li className="topListItem">

          <Link to="gallery" spy={true} smooth={true} offset={50} duration={500}> GALLERY</Link>
          </li>
         
          <li className="topListItem">

          <Link to="sample" spy={true} smooth={true} offset={50} duration={500}> CONTACT</Link>
          </li>
          <button className="btn one">
          <Link to="sample2" spy={true} smooth={true} offset={50} duration={500}> SIGN UP</Link>
          </button>
        </ul>
      </div>
      <div onClick={handleClick} className="menu-icons">
        {click ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </div>
     
    </div>
  );
}
export default Navbar;