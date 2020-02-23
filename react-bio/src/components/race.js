import React from 'react';
import {Link} from 'react-router-dom';

const Races = (props) => {
    return (
        <div className="main-content">
            <div><Link className="back" to="/race">Back</Link></div>
            <h2>{props.title}</h2>
            <div className="container">
                <div className="image-profile">
                <h2>{props.name}</h2>
                <div className="race-hero-image" style={{backgroundImage: "url("+ props.gif +")"}}></div>
                <p className="race-basic-info">{props.info}</p> 
                </div>
            </div>
        </div>
    );
};

export default Races;