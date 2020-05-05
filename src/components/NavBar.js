import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const activeStyle = {
        color: "#F15B2A"
    }

    return (
    <div>
    <nav>
        <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
        {"    |    "}
        <NavLink to="/About" activeStyle={activeStyle}>About</NavLink>
    </nav>
    </div>
    )
}

export default NavBar;
