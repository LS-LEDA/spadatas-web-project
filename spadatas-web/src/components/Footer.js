import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        <p className='footer-item footer-title'>S P A D A T A S</p>
        <p className='footer-item'>Security and Privacy in Academic Data management at Schools</p>

        <div className='footer-item'>
            <p className='footer-format'>© 2023 — Made by</p>
            <a className='footer-link footer-format' href='https://www.linkedin.com/in/roger-galvan/'>Roger</a>
        </div>
       
        <div className='footer-item'>
            <p className='footer-format'>More at</p>
            <a className='footer-link footer-format' href='https://spadatas.eu'>spadatas.eu</a>
        </div>


    </div>
  );
}

export default Footer;