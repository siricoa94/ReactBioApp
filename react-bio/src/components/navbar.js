import React from 'react';

const Navbar = (props) => (
    <nav>
        <h2 className="logo">
            <a className="logo-link" href="">{props.title}</a>
        </h2>
        <ul class="nav-menu">
            <li><a className="nav-link" href="">Home</a></li>
            <li><a className="nav-link" href="">Races</a></li>
            <li><a className="nav-link" href="">Heroes</a></li>
            <li><a className="nav-link" href="">Strategy</a></li>
        </ul>
    </nav>
);

export default Navbar;
