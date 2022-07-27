import React from 'react'
import './css/Navbar.css'
import logo from "../assets/OMDbMovies.png"
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <div className="nav__container">
                <img src={logo}/>
                <ul className='nav__links'>
                    <li><Link to='/' className='nav__link'>Home</Link></li>
                    <li><a className='nav__link'>Contact</a></li>
                    <li><Link to='/search' className='nav__link nav__link--primary'>Movies</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar