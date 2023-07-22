import { useState } from "react";
import "./navbar.css";

export default function Box() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  return (
    <div className="navbar">
      <div className="nav-left">S'bakery</div>
      <div onClick={handleClick} className="menu-icons">
        {click ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </div>
      <div className="nav-center" onClick={closeMenu}>
        <ul className="topList">
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">MENU</li>
          <li className="topListItem">GALLERY</li>
          <li className="topListItem">CONTACT</li>
        </ul>
      </div>
      <div className="nav-right">
        <button className="btn">SIGN UP</button>
      </div>
    </div>
  );
}
