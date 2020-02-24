import React from 'react';
import {Link} from 'react-router-dom';

const Races = (props) => {
    return (
        <div className="main-content">
            <div><Link className="back" to="/race">Back</Link></div>
            <h2>{props.title}</h2>
            <div className="container">
                <div className="image-profile">
                <h3>{props.name}</h3>
                <div className="race-hero-image" style={{backgroundImage: "url("+ props.gif +")"}}></div>
                <p className="race-basic-info">{props.info}</p>
                <h3 className="race-tier-building-title">{props.building_title}</h3> 
                <div className="race-tier-building-image" style={{backgroundImage: "url("+ props.tech_img +")"}}></div>
                <p className="race-basic-info">{props.building_info}</p>
                </div>
            </div>
        </div>
    );
};

export default Races;