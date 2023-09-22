import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';

function NavBar() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>

                <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                    <img className='navbar-logo-icon' src='./images/SPADATAS_logo.png' alt='The logo of SPADATAS in a shield-like shape'/>
                    SPADATAS
                </Link>

                <div className='menu-icon' onClick={handleClick}>
                    <img className={click ? 'menu-plus-sign' : 'menu-bars-sign'} src={click ? './images/plus_sign.png' : './images/bars_sign.png'}></img>
                </div>

                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            HOME
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about-us' className='nav-links' onClick={closeMobileMenu}>
                            ABOUT US
                        </Link>
                    </li>
                </ul>

            </div>
        </nav>
    </>
  )
}

export default NavBar;