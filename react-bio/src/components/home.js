import React from 'react';
import {Link} from 'react-router-dom';

const Home = (props) => (
    <div className="main-content">
        <div className="container">
        <h2>{props.title}</h2>
        <div className="home-image"></div>
        <div className="thumbnail-container">
            <Link to="race/Human" className="home-thumbnail-1"></Link>
            <div className="home-thumbnail-2"></div>
            <div className="home-thumbnail-3"></div>
            <div className="home-thumbnail-4"></div>
        </div>
        </div>
    </div>
);

export default Home;