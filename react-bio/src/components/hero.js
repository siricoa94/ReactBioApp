import React from 'react';
import {Link} from 'react-router-dom';

const Hero = (props) => {
    return (
        <div className="main-content">
            <div><Link className="back" to="/hero">Back</Link></div>
            <h2>{props.title}</h2>
            <div className="container">
                <div className="image-profile">
                <h3 className>{props.name}</h3>
                <div className="hero-image-gif" style={{backgroundImage: "url("+ props.gif +")"}}></div>
                <p className="hero-basic-info">{props.info}</p> 
                </div>
            </div>
        </div>
    );
};

export default Hero;