import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"
const Navbar = () => {
    return (

        <nav className="navbar">
            <ul className="ulnavbar">
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/MovieCard">
                    <li>Movie</li>
                </Link>
                <Link to="/About"> <li>About</li></Link>

            </ul>
        </nav>

    )
}

export default Navbar
