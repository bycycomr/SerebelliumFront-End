import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
     
      <div class="topnav">
      <a class="active" href="#home">Home</a>
      <a href="#news">News</a>
      <a href="#contact">Contact</a>
      <a href="#about">About</a>
</div>
    </header>
  );
  
};

export default Header;
