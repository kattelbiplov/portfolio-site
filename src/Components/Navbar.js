import React from 'react';
import '../Styles/ComponentsStyles/Navbar.css'

const Navbar = () => {
  return (
    <div style={{backgroundColor:'#05433E'}}>
      <div className='container navbar'>
        <div className='navbar-logo'>
          <h1>Diwakar Joshi</h1>
        </div>
        <div className='navbar-list'>
          <ul>
            <li>Home</li>
            <li>About Me</li>
            <li>Services</li>
            <li>Story</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;