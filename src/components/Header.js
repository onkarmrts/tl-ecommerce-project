import React from "react";
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo" >E-Commerce Store</h1>
      <nav>
        <ul className="navList">
          <li > <a className="navListItem" href="">Home</a></li>
          <li> <a className="navListItem" href="">Cart</a></li>
          <li> <a className="navListItem" href="">Login</a></li>
        </ul>
      </nav>
    </header>
  );
};



export default Header;
