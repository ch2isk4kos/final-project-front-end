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
        <NavLink exact to="/courts" activeStyle={activeStyle}>Courts</NavLink>
        {"    |    "}
        <NavLink to="/courts/new" activeStyle={activeStyle}>Add Court</NavLink>
        {"    |    "}
        <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
    </nav>
    </div>
    )
}

export default NavBar;
