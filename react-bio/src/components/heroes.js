import React from 'react';
import {HeroesList} from '../data/hero';
import {Link} from 'react-router-dom';

const Heroes = (props) => {
    let Heroes = HeroesList.map((person) => {
        return (
            <div className="hero-container">
                <Link to={`/hero/${person.url}`}>
                    <div className="hero-image" style={{backgroundImage: "url("+ person.img_src +")"}}></div>
                </Link>
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

export default Heroes;