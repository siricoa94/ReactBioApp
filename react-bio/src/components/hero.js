import React from 'react';
import {Link} from 'react-router-dom';

const Hero = (props) => {
    return (
        <div className="main-content">
            <div><Link className="back" to="/">Back</Link></div>
            <h2>{props.name}</h2>
            <div className="inner-hero-container">
                <div className="image-profile">
                   <h2>asas</h2>
                   <p>asas</p> 
                </div>
            </div>
        </div>
    );
};

export default Hero;