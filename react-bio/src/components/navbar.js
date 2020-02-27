import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = (props) => (
    <nav>
        <h2 className="logo">
            <a className="logo-link" href="">{props.title}</a>
        </h2>
        <ul className="nav-menu">
            <li><NavLink className="nav-link" exact to="/">Home</NavLink></li>
            <li><NavLink className="nav-link" to="/race">Races</NavLink></li>
            <li><NavLink className="nav-link" to="/hero">Heroes</NavLink></li>
            <li><NavLink className="nav-link" to="/forum">forum</NavLink></li>
        </ul>
    </nav>
);

export default Navbar;
