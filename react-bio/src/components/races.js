import React from 'react';
import {RaceList} from '../data/race'
import {Link} from 'react-router-dom';

const Race = (props) => {
    let Races = RaceList.map((person) => {
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
            {Races}
            </div>
        </div>
    );
};

export default Race;