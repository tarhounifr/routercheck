import React from 'react';
import { NavLink} from 'react-router-dom';
import{Nav,Navbar} from 'react-bootstrap';
import "./Navbar.css"
const NavBar = () => {
    return (

  <Navbar bg="primary" variant="dark">
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="mr-auto">
      <NavLink className="nav" to="/" >Home</NavLink>
      <NavLink className="nav" to="/MovieCard">Movie</NavLink>
      <NavLink className="nav" to="/About">About</NavLink>
    </Nav>                
  </Navbar>    
    )           
}

export default NavBar
