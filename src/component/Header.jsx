import React from 'react'
import "../App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
const Header = () => {
  return (
    <div className="main-header">
      <header className="header">
        <div className="header-left">
            <FontAwesomeIcon icon={faReact}  style={{ color: 'black', fontSize: '48px' }} />
        </div>
          <h1>LOGO</h1>
        <div className="header-right">
          <a href="#search"><FontAwesomeIcon icon={faSearch} /></a>
          <a href="#wishlist"><FontAwesomeIcon icon={faHeart} /></a>
          <a href="#account"><FontAwesomeIcon icon={faShoppingBag} /></a>
          <a href="#cart"><FontAwesomeIcon icon={faUser} /></a>
          <a href="#language">ENG</a>
        </div>
      </header>
        <nav className="nav">
          <ul>
            <li><a href="#shop">SHOP</a></li>
            <li><a href="#skills">SKILLS</a></li>
            <li><a href="#stories">STORIES</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#contact">CONTACT US</a></li>
          </ul>
        </nav>
      <main className="main-content">
        <h2>DISCOVER OUR PRODUCTS</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus<br></br>
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
        </p>
      </main>
    </div>
  )
}

export default Header
