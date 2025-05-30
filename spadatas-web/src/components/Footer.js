import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        <p className='footer-item footer-title'>S P A D A T A S</p>
        <p className='footer-item'>Security and Privacy in Academic Data management at Schools</p>

        <div className='footer-item-EU'>
            <img className='footer-logo-icon' id="footer-EU-image" src='./images/EN_V_Co-funded_by_NEG.png' alt='The logo of the European Union'/>
            <p className='footer-format'>The SPADATAS project (Ref.: 2022-1-ES01-KA220-SCH-000086363) is co-financed by the Erasmus + program of the European Union. The content of publication is the sole responsibility of consortium and neither the European Commission, nor the Spanish Service for the Internationalization of Education (SEPIE) are responsible for the use that may be made of the information disclosed here.</p>
        </div>

        <div className='footer-item'>
            <a className='footer-link footer-format' href='https://creativecommons.org/licenses/by-nc-sa/4.0/'><img id="footer-CC-image" src='./images/cc_thumbnail_by-nc-sa.png' alt='Attribution-NonCommercial-ShareAlike 4.0 International'/></a>
        </div>

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
