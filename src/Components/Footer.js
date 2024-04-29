import React from 'react';
import '../Styles/ComponentsStyles/Footer.css'

const Footer = () => {
  return (
    <div style={{backgroundColor:'#05433E'}}>
      <div className='container footer'>
        <div className='footer-logo'>
          <h1>Diwakar Joshi</h1>
        </div>
        <div className='footer-list'>
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

export default Footer;
