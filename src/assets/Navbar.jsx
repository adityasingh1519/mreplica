import React from 'react'
import { useState } from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faXmark} from '@fortawesome/free-solid-svg-icons'


export default function Navbar() {

  const [isActive, setIsActive] = useState(false);

  const handle_nav = () => {
    setIsActive(!isActive);
    console.log('Div clicked!');
  };

  return (
    <>
    <header className={isActive ? 'active' : ''}>

        <nav>
            <label className='logo' htmlFor="logo">LOGOHERE</label>

            <ul className='navlist '>
                <li><a href="/">Home</a></li>
                <li><a href="/Portfolio">Portfolio</a></li>
                <li><a href="/Servies">Servies</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/ReachUs">Reach Us</a></li>
                
            </ul>

            <div onClick={handle_nav} className="nav-mob-btn">
                <FontAwesomeIcon className="nav-mob-icon " name='faBars' icon={faBars} style={{color: "#ffffff",}} />
                <FontAwesomeIcon className="nav-mob-icon " name='faXmark' icon={faXmark} style={{color: "#ffffff",}} />

            </div>

        </nav>

    </header>
        
        

  
        
    </>
  )
}
