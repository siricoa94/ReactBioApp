import React from 'react';
import {HeroesList} from '../data/hero';
import {Link} from 'react-router-dom';

const Hero = (props) => {
    let Heroes = HeroesList.map((person) => {
        return (
            <div className="hero-container">
                <a>
                    <div className="hero-image" style={{backgroundImage: "url("+ person.img_src +")"}}></div>
                </a>
                <h3>{person.name}</h3>
            </div>
        );
    });
    return (
        <div className="main-content">
            <div><Link className="back" to="/">Back</Link></div>
            <h2>{props.title}</h2>
            <div className="inner-hero-container">
            {Heroes}
            </div>
        </div>
    );
};

export default Hero;