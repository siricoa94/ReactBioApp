import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => (
    <nav>
        <h2 className="logo">
            <a className="logo-link" href="">{props.title}</a>
        </h2>
        <ul class="nav-menu">
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/race">Races</Link></li>
            <li><Link className="nav-link" to="/hero">Heroes</Link></li>
            <li><Link className="nav-link" to="/strategy">Strategy</Link></li>
        </ul>
    </nav>
);

export default Navbar;
