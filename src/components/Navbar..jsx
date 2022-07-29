import React from 'react'
import './css/Navbar.css'
import logo from "../assets/OMDbMovies.png"
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <div className="nav__container">
                <Link to='/'><img className='logo' src={logo}/></Link>
                <ul className='nav__links'>
                    <li><Link to='/' className='nav__link'>Home</Link></li>
                    <li><Link to='/search' className='nav__link nav__link--primary'>Movies</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar