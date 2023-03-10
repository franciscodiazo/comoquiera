import React from 'react';
import Navbar from './Navbar'

const Header = () => {
  return (
    <div>
      <div className="nav-area">
        <a href="/" className="logo">
          Logo
        </a>
        <Navbar/>
      </div>
    </div>
  );
};

export default Header