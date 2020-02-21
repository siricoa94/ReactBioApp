import React from 'react';
import {Link} from 'react-router-dom';

const Races = (props) => {
    return (
        <div className="main-content">
            <div><Link className="back" to="/">Back</Link></div>
            <h2>{props.title}</h2>
            <div className="container">
                <div className="image-profile">
                <h2>{props.name}</h2>
                <div className="hero-image" style={{backgroundImage: "url("+ props.gif +")"}}></div>
                <p>{props.info}</p> 
                </div>
            </div>
        </div>
    );
};

export default Races;